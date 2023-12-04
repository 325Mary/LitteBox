const { createUser, loginUser, generateResetToken } = require('../services/user.services');
const user = require('../models/user.model');


const controller = {};

controller.postUser = async (req, res) => {
  await createUser(req, res);
};

controller.postLogin = async (req, res) => {
  await loginUser(req, res);
};



controller.forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const resetToken = await authService.generateResetToken(user);

    // Envía un correo electrónico con el enlace que contiene el token de restablecimiento
    // (puedes usar nodemailer u otra biblioteca para enviar correos electrónicos)
    // ...

    res.json({ success: 'Se ha enviado un correo electrónico con las instrucciones para restablecer la contraseña' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error interno del servidor', message: error.message });
  }
};

controller.resetPassword = async (req, res) => {
  try {
    const token = req.params.token;
    const newPassword = req.body.newPassword;

    await authService.resetPassword(token, newPassword);

    res.json({ success: 'Contraseña restablecida correctamente' });
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ error: 'No se pudo restablecer la contraseña', message: error.message });
  }
};


module.exports = controller;
