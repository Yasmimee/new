const express= require('express')
const router= express.Router()
const Lost = require ('../Models/lost-people')
const upload=require('../middleware/upload')
const { isAtuhorized } = require('../middleware/auth')

router.post('/',upload.single("Picture") ,isAtuhorized,async (req,res)=>{
    const {name,age,description}=req.body
    
    try {
        const lostPerson= new Lost({
            name,age,description,Picture:req.file.filename
        })
       await  lostPerson.save()
       res.status(200).send({msg:"New lost person added:"})
   
    } catch (error) {
        res.status(500).send("could not add lost person")
    }
})
router.get('/lostList', async (req, res)=>{
    try {
        const getLosts= await Lost.find()
     res.status(200).send({ msg:"List of lost people", getLosts})

    } catch (error) {
        res.status(500).send("could not get list of lost people" )
    }
})


module.exports=router
