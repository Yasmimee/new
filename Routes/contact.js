
const express= require('express')
const { Signin, Signup } = require('../controllers/Auth')
const { isAtuhorized } = require('../middleware/auth')
const { registerValidation, validation, loginValidation } = require('../middleware/validator')
const router= express.Router()
const contact = require('../Models/contacts')


// SignUp
router.post('/Signup', Signup, registerValidation , validation )
 
//SignIn

router.post('/Signin', Signin, loginValidation, validation)

//current 

router.get('/current', isAtuhorized, (req,res)=> res.send({user:req.user}))



module.exports=router