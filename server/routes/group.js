const {Router} = require('express')

const {create, _delete, fetch} = require('../controllers/')

//Authenticate user
const {checkAuth} = require('../middleware')


const group = Router()

group.post('/create', checkAuth,  create)
group.post('/delete', checkAuth, _delete)
group.post('/fetch', checkAuth, fetch)

module.exports = group