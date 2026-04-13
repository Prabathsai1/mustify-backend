const Model = require('../model/user.model.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const env = require('../config/config.js')

async function Login(req, res) {
    try {

        if (!req.body.UserName || !req.body.Password) {
            return (res.status(400).json({ success: false, message: "all fields required" }))
        }

        const findUser = await Model.findOne({ UserName: req.body.UserName })
        if (!findUser) {
            return (res.status(400).json({ success: false, message: "username not found" }))
        }


        const hashCompare = await bcrypt.compare(req.body.Password, findUser.Password)

        if (!hashCompare) {
            return (res.status(400).json({success:false,message:"incorrect password"}))
        }
        const refreshtoken = jwt.sign({ _id: findUser._id }, env.refreshToken, { expiresIn: '7d' })

        const accessToken = jwt.sign({ UserName: findUser.UserName, Email: findUser.Email }, env.accessToken, { expiresIn: '15m' })

        req.session.user={userid:findUser._id,role:findUser.Role}
       
        res.cookie("refreshToken", refreshtoken, { httpOnly: true, secure: true, sameSite: "strict", maxAge: 1000*60*60 })
        res.header("Authorization",`Bearer ${accessToken}`)

        res.status(200).json({success:true,message:"user login successful"})
    }

    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}
module.exports = Login