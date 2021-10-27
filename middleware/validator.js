const {body, validationResult , } =require('express-validator')
exports.registerValidation=[
    body('name', 'please enter a name').notEmpty(),
    body('email','please enter an email').notEmpty(),
    body('password','must contain at least 6 characters').notEmpty().isLength({min:6})
]
exports.validation=(req, res, next)=>{
    const errors= validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).send({errors:errors.array()})
    } next()
}

exports.loginValidation=[
    body('email','Enter an email').isEmail(),
    body('password','must contain 6 characters').isLength({min:6})
]
