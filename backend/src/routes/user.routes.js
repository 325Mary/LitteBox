const {Router} = require('express')
const routes= Router()
const {postUser, postLogin, forgotPassword, resetPassword} = require ('../controlller/user.controller')


routes.post('/registrar', postUser)
routes.post('/iniciarSesion', postLogin)
routes.post('/forgotPassword', forgotPassword)
routes.post('/resetPassword', resetPassword)

module.exports = routes 