const {Router} = require('express')

const {create, _delete} = require('../controllers/')

//Authenticate user
const {checkAuth} = require('../middleware')


const group = Router()

group.post('/create', checkAuth,  create)
group.post('/delete', checkAuth, _delete)

module.exports = group