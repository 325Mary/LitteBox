const {model, Schema} = require('mongoose')

const userSchema= new Schema({
    username: String,
    empresa: String,
    nit: Number,
    email: String,
    password:  { type: String, select: false },

})




module.exports = model('user', userSchema, "Users")