const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const createUser = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 12);
    const user = await User.create(req.body);
    res.json(user);
  } catch (e) {
    console.error('Error:', e);
    res.status(500).json({ error: 'Internal server error', message: e.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.json({ error: 'Error en usuario/contraseña' });
    }

    const pass = await bcrypt.compare(req.body.password, user.password);
    if (!pass) {
      return res.json({ error: 'Error en usuario/contraseña' });
    }

    res.json({ success: 'login correcto', token: crearToken(user) });
  } catch (e) {
    console.error('Error:', e);
    res.status(500).json({ error: 'Internal server error', message: e.message });
  }
};

function crearToken(user) {
  const payload = {
    user_id: user._id,
  };
  return jwt.sign(payload, 'running');
}

const generateResetToken = async (user) => {
  const resetToken = crypto.randomBytes(20).toString('hex');
  const resetTokenExpiry = Date.now() + 3600000; // Token válido por 1 hora

  // Almacena el token y la fecha de expiración en la base de datos
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = resetTokenExpiry;
  await user.save();

  return resetToken;
};

const resetPassword = async (token, newPassword) => {
  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      throw new Error('Token no válido o expirado');
    }

    // Restablecer la contraseña y limpiar los campos de reseteo
    user.password = await bcrypt.hash(newPassword, 12);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
  } catch (error) {
    throw new Error('No se pudo restablecer la contraseña');
  }
};

module.exports = {
  createUser,
  loginUser,
  generateResetToken,
  resetPassword,
};
