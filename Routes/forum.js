const express = require('express');
const router = express.Router();
// const { check , validationResult }= require('express-validator/check')
const {isAtuhorized }= require('../middleware/auth')

const Post=require('../Models/forum')
const User = require ('../Models/contacts')
const Contact = require ('../Routes/contact'); 

 



router.post('/posts',isAtuhorized, async (req,res)=>{
 
    try {

        const user= await User.findById(req.user.id).select('-password');
    
        const newPost= new Post({
           text: req.body.text,
           name: user.name,
        
           user: req.user.id
       });

       const post = await newPost.save()
       res.send(post)
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
  
});



router.delete('/:ID', isAtuhorized, async (req, res)=>{
    try {
        const Delpost = await Post.findById(req.params.ID);

        if(!Delpost){
            return res.status(400).send({msg:"post not found"})
        }

        if(Delpost.user.toString() !== req.user.id){
        return res.status(400).send("user not authorized !")
        }
        await Delpost.remove();
       
        res.send("post removed !")
    } catch (error) {
       
        res.status(500).send(error)
    }
});



router.get('/:ID',isAtuhorized, async (req, res)=>{
    try {
        const post = await Post.findById(req.params.ID);

        if(!post){
            return res.status(400).send({msg:"post not found"})
        }

        res.send({post})
    } catch (error) {
       
        res.status(500).send(error)
    }
});



router.put('/:ID', isAtuhorized, async(req,res)=>{
    const {id}= req.params
     try {
         const UpdatePost = await Post.findByIdAndUpdate(id,{$set : {...req.body}})

         res.status(200).send({msg:"post updated", UpdatePost})

     } catch (error) {
         res.status(500).send({msg:"could not update post", error})
     }
})







router.post('/comment/:id'
, isAtuhorized, async(req,res)=>{
    
    
    try {

        const user= await User.findById(req.user.id).select('-password');
   
        const post = await Post.findById(req.params.id);
//  console.log(post)
        const newComment= new Post({
           text: req.body.text,
           name: user.name,
          
           user: req.user.id
       });
    //    console.log(newComment)

      await post.comments.unshift(newComment);
    
     await  post.save()
  
     res.send(post.comments)
    } catch (error) {
        
        res.status(500).send(error)
    }
  
});

router.delete('/comment/:ID/:comment_id', isAtuhorized, async (req,res)=>{
    try {
        
        const post= await Post.findById(req.params.ID)
        
        const comment = post.comments.find(
            (comment)=> comment.id=== req.params.comment_id
        );
        if (!comment){
            return res.status(400).send("comment does not exist !")
        }
        if (comment.user.toString() !== req.user.id){
            return res.status(400).send("user is not authorized")
        }
        post.comments = await post.comments.filter(
            el => el._id != req.params.comment_id
        );

        await post.save();
        // console.log(post)
     res.send({msg:'comment deleted',post});

    } catch (error) {
        console.log(errors)
        return res.status(500).send('Server Error')
    }
})

router.get('/', isAtuhorized, async(req,res)=>{
    try {
        const getAll =  await Post.find()
        res.status(200).send({msg:"all posts", getAll})
    } catch (error) {
        res.status(500).send({msg:"could not get posts", errors})
    }
})
module.exports = router;