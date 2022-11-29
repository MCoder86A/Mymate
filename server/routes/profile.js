const { Router } = require('express')

const { myprofile, userinfo } = require('../controllers/profile')
const { checkAuth } = require('../middleware')

const profile = Router()

profile.post('/myprofile', checkAuth, myprofile)
profile.post('/userinfo', checkAuth, userinfo)

module.exports = profile