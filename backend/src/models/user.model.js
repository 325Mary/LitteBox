const {model, Schema} = require('mongoose')

const userSchema= new Schema({
    username: String,
    empresa: String,
    nit: Number,
    email: String,
    password: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,

})




module.exports = model('user', userSchema, "Users")