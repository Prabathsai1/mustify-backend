const express = require("express")
const WaitingAdminApproval=require("../../controller/admin/waitingApprovalData.controller")
const route = express.Router()
route.post("/",WaitingAdminApproval)
module.exports=route