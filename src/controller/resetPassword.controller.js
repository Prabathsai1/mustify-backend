const Model = require('../model/user.model.js')
const bcrypt = require('bcrypt')
async function passwordreset(req, res) {
    try {
        if (!req.body.UserName || !req.body.ResetPassword) {
            return (res.status(400).json({ success: false, message: "all feilds required" }))
        }

        const findUser = await Model.findOne({ UserName: req.body.UserName })

        if (!findUser) {
            return (res.status(400).json({ success: false, message: "user not found" }))
        }
        const hashing = await bcrypt.hash(req.body.ResetPassword, 10)

        await Model.updateOne({ UserName: req.body.UserName }, { $set: { Password: hashing } })

        return (res.status(200).json({ success: true, message: "password changed successfully please login" }))
    }

    catch (error) {
        res.status(500).json({ success: false, message: "oops something happen" })
        console.log(error)
    }
}
module.exports = passwordreset