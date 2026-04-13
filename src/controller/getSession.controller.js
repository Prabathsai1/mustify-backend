function checkSession(req,res){
res.status(200).json({success:true,message:"user is authenticated"})
}
module.exports=checkSession