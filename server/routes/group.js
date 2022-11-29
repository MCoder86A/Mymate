const {Router} = require('express')

const {
    create, _delete, fetch, addme,
    showreq, acceptreq, getgroup, groupinfo
} = require('../controllers/')

//Authenticate user
const {checkAuth} = require('../middleware')


const group = Router()

group.post('/create', checkAuth,  create)
group.post('/delete', checkAuth, _delete)
group.post('/fetch', checkAuth, fetch)
group.post('/addme', checkAuth, addme)
group.post('/showreq', checkAuth, showreq)
group.post('/acceptreq', checkAuth, acceptreq)
group.post('/getgroup', checkAuth, getgroup)
group.post('/groupinfo', checkAuth, groupinfo)

module.exports = group