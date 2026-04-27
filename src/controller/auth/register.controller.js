const Model = require('../../model/user.model.js')
const bcrypt=require('bcrypt')

async function Register(req, res) {
    try {
        if (!req.body.UserName || !req.body.Password || !req.body.Email||!req.body.Role) {
            return (res.status(400).json({
                success: false,
                message: "All fileds are required"
            }))
        }
        const findUser = await Model.findOne({ UserName: req.body.UserName })
            console.log(findUser)
        if (findUser) {
            return (res.status(409).json({ success: false, message: "username is already register" }))
        }
        const hashing=await bcrypt.hash(req.body.Password,10)

        await Model.create({
            UserName: req.body.UserName,
            Email: req.body.Email,
            Password: hashing,
            Role: req.body.Role
        })
        res.status(201).json({success:true,message:"user register successfully please login"})
    }
    catch (error) {

        res.status(500).json({ success: false, message: error.message })
    }
}

module.exports=Register