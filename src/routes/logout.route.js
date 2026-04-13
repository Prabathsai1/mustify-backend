const express = require('express')
const logout = require('../controller/logout.controller.js')
const route = express.Router()
route.post('/',logout)

module.exports=route