const {Router} = require('express')
const routes= Router()
const {postUser, postLogin, resetPasswordPost, restablecerPassword} = require ('../controlller/user.controller')
const upload = require('../middleware/multerMiddleware')


routes.post('/registrar',upload.single("image"), postUser)
routes.post('/iniciarSesion', postLogin)
routes.post('/reset-password', resetPasswordPost)
routes.get('/restablecer', restablecerPassword)
module.exports = routes 