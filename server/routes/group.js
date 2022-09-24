const {Router} = require('express')

const {
    create, _delete, fetch, addme,
    showreq
} = require('../controllers/')

//Authenticate user
const {checkAuth} = require('../middleware')


const group = Router()

group.post('/create', checkAuth,  create)
group.post('/delete', checkAuth, _delete)
group.post('/fetch', checkAuth, fetch)
group.post('/addme', checkAuth, addme)
group.post('/showreq', checkAuth, showreq)

module.exports = group