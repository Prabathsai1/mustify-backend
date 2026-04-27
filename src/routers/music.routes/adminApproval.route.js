const express = require('express')
const allmusic = require('../../controller/admin/adminapproving.controller')
const route = express.Router()
route.post('/', allmusic)

module.exports = route