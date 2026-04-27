function adminVerification(req, res,next) { 
    if (req.session.user.role != "admin") { 
        return res.status(403).json({success:false,message:"unauthorized"})
    }
    next()
}
module.exports=adminVerification