const {model, Schema} = require('mongoose')

const userSchema= new Schema({
    username: {type: String,
        required:[true, 'nombre requerido']},
    empresa: {type: String,
        required: [true, 'nombre de empresa requerido']},
    nit: {type: Number,
        required: [true, 'Nit de la empresa requerido'],
        unique:false
        },
    email: {type: String,
        required:[true, 'correo requerido'],
        unique: true},
    password: {type: String,
        required: [true, 'constraseña requerida']},
    imagenfirme: {type: String,
        required:[true, 'Imagen de firma es requerida']},
    resetPasswordToken: String,
    resetPasswordExpires: Date,

})




module.exports = model('user', userSchema, "Users")
