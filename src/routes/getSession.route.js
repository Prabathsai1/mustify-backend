const express=require('express')
const getSession=require('../controller/getSession.controller.js')
const route=express.Router()

route.post('/',getSession)

module.exports=route