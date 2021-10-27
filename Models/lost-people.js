const mongoose=require('mongoose')
 const lost= new mongoose.Schema(
     {
         name:{type:String, required:true},
         age:{type:Number},
         description :{type:String},
         Picture: {type: String, required:true}
     }
 )
 module.exports= mongoose.model("Lost",lost)