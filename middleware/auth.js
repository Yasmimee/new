const jwt=require("jsonwebtoken")
const User=require('../Models/contacts')

exports.isAtuhorized= async(req,res,next)=>{
    const token=req.header('Authorization')
    console.log(token)
    try {
        if (!token)
            { return res.status(400).send("not Authorized")
        }
        const decoded= jwt.verify(token,process.env.SecretOrKey)
        // console.log(decoded)
        const user= await User.findById(decoded.id)
        // console.log(user)
        req.user= user
        next()
    } catch (error) {
        res.status(500).send("server error")
    }
}