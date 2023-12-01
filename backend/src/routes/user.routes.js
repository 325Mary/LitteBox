const {Router} = require('express')
const routes= Router()
const {postUser, postLogin, forgotPassword} = require ('../controlller/user.controller')


routes.post('/registrar', postUser)
routes.post('/iniciarSesion', postLogin)
routes.post('/forgot-password', forgotPassword)

module.exports = routes 