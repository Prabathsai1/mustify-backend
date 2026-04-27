const Model = require('../model/user.model.js')
const jwt = require('jsonwebtoken')
const env = require('../config/config.js')
async function verify(req, res, next) {
    try{
    if (!req.session.user || !req.session) {
        return (res.status(401).json({success:false ,message: "session expired" }))
    }

    const findUser=await Model.findOne({_id:req.session.user.userid})
         if (!findUser) {
            return (res.status(400).json({ success: false, message: "username not found" }))
        }

        const refreshtoken = jwt.sign({ _id: findUser._id }, env.refreshToken, { expiresIn: '7d' })

        const accessToken = jwt.sign({ UserName: findUser.UserName, Email: findUser.Email }, env.accessToken, { expiresIn: '15m' })

        req.session.user={userid:findUser._id,role:findUser.Role}
        res.cookie("refreshToken", refreshtoken, { httpOnly: true, secure: true, sameSite: "none", maxAge: 1000*60*60 })
        res.header("Authorization",`Bearer ${accessToken}`)
        next()
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }

}
module.exports = verify
