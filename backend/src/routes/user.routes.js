const {Router} = require('express')
const routes= Router()
const {postUser, postLogin} = require ('../controlller/user.controller')


routes.post('/registrar', postUser)
routes.post('/iniciarSesion', postLogin)

module.exports = routes 