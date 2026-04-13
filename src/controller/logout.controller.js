async function logoutController(req, res) {
    try{
        await sessionClear(req)
        res.clearCookie("user")
        res.clearCookie("refreshToken")
        res.status(200).json({success:true,message:"successfully logout"})
    }
    catch(error){
    console.log(error)
    res.status(500).json({success:false,message:error.message})
    }

}
function sessionClear(req) {
    return (new Promise((resolve, reject) => {
        req.session.destroy((error) => {
            if (error) {
                reject(error.message)
            }
            else {
                resolve()
            }
        })
    }))
}

module.exports=logoutController