const Model = require('../model/user.model.js')

async function checkUser(req,res){
const findUser=await Model.findOne({_id:req.session.user.userid})
res.status(200).json({success:true,message:"user is authenticated",UserName:findUser.UserName,Email:findUser.Email})
}
module.exports=checkUser