const express = require('express')
const logout = require('../../controller/auth/logout.controller')
const route = express.Router()
route.post('/',logout)

module.exports=route