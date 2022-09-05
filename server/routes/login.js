const { Router } = require('express')

const login_controller = require('../controllers/login_controller')
const login = Router()

login.post('/', login_controller)

module.exports = login