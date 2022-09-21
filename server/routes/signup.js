const express = require('express')

const signup_controller = require('../controllers/signup_controller')
const signup = express.Router()

signup.post("/", signup_controller)

module.exports = signup