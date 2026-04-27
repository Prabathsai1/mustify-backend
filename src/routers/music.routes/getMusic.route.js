const express = require('express')
const allmusic = require('../../controller/allmusic.controller.js')
const route = express.Router()
route.post('/', allmusic)

module.exports = route