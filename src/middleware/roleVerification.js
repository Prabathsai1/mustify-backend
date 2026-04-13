async function musicVerification(req,res,next){
    
if(req.session.user.role!="artist"){
    return(res.status(403).json({success:false,message:"unauthorized"}))
}
next()
}
module.exports=musicVerification