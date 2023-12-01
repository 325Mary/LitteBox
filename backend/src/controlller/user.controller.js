
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken')
const crypto = require('crypto');


const controller = {}
// post
controller.postUser= async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 12); // Fix the typo
        const user = await User.create(req.body);
        res.json(user);
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json({ error: 'Internal server error', message: e.message });
    }
};

//login
controller.postLogin = async (req,res)=>{
    //comprobacionde email
   const user = await  User.findOne({
         email: req.body.email
    })
    if (!user){
        return res.json({
            error: 'Error en email y contraseña'
        })
    }
    const pass = bcrypt. compareSync (req.body.password, user.password)
    if (!pass){
        return res.json({
            error: 'Error en email y contraseña'
        })
    }
    res.json({success: 'Iniciaste sesion' , token: crearToken(user) })

}
//recuperar contraseña
controller.forgotPassword = async (req, res) => {
    const { email } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.json({ error: 'Usuario no encontrado' });
      }
  
      const token = crypto.randomBytes(20).toString('hex');
      
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hora de validez
      
      await user.save();
    // Enviar el token al usuario (puedes enviarlo por correo electrónico o mensajes)
    // Para propósitos de demostración, simplemente enviamos el token en la respuesta
    res.json({ resetToken: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error', message: error.message });
  }
};

    

function crearToken(user) {
        const payload ={
            user_id: user._id,
            user_role: user.role
        }
        return jwt.sign(payload, process.env.JWT_SECRET);
        // const payload = {
        //     user_id: user._id,
        //     user_role: user.role,
        //     exp: Math.floor(Date.now() / 1000) + (60 * 60) // Token expires in 1 hour
        // };
        
}


module.exports = controller
