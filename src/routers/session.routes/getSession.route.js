const express=require('express')
const getSession=require('../../controller/session/getSession.controller')
const route=express.Router()

route.post('/',getSession)

module.exports=route