const contact=require('../Models/contacts')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')


exports.Signup = async(req,res)=>{
    const {name, email, password}=req.body
    
    try {
        const found = await contact.findOne({email})
        if (found) {return res.status(400).send("user already exists !")}
        const user= new contact(req.body)
        const salt=10
        const hashedpassword= bcrypt.hashSync(password,salt)
        user.password=hashedpassword
        user.save()
        const payload= {id:user._id}
        const token= jwt.sign(payload, process.env.SecretOrKey)
        res.status(200).send({msg:"User Added!", user,token})

    } catch (error) {
        res.status(500).send({errors:["could not add user"]})
    }
}
exports.Signin = async (req,res)=>{
    const {email, password}=req.body
    try {
        const found = await contact.findOne({email})
        console.log(found)
        if (!found) {return res.status(400).send({errors:[{msg:" wrong password or email ! "}]})}
        const match=  await bcrypt.compare(password, found.password)
        if (!match) {return res.status(400).send({errors:[{msg:" wrong password or email ! "}]})}

        const payload= {id:found._id}
        const token= jwt.sign(payload, process.env.SecretOrKey)
        
        res.status(200).send({msg:"Login", found, token})
    } catch (error) {
        res.status(500).send("could not Login")
    }
}