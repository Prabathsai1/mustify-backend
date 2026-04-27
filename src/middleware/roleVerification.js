async function musicVerification(req,res,next){
    
    if (req.session.user.role != "artist" && req.session.user.role != "admin") {
            console.log(req.session.user.role)

    return(res.status(403).json({success:false,message:"unauthorized"}))
}
next()
}
module.exports=musicVerification