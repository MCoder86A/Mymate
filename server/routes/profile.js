const { Router } = require('express')

const { myprofile } = require('../controllers/profile')
const { checkAuth } = require('../middleware')

const profile = Router()

profile.post('/myprofile', checkAuth, myprofile)

module.exports = profile