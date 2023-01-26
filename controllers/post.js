const Post = require('../models/post');






module.exports.createPosts = async(req,res)=>{
console.log("createPost", req.body)
      const post = req.body
    const createPost = await Post.create(post);

    return res.status(200).json({
        message:"Post created succefully",
        data:createPost
    })

}



module.exports.getPosts = async(req,res)=>{

    const posts = await Post.find();

    return res.status(200).json({
        message:"Getting all the posts succesfully!",
        data:posts
    })

}


module.exports.updatePost = async(req,res)=>{
  try{
    const postId = req.params.id;
    console.log("req.body.userId", req.body.userId)
    const updatedPost =  await Post.findByIdAndUpdate(postId, {$set:req.body});

   console.log("updatePost", updatedPost);

   return res.status(200).json({
    message:"post updated successfully",
    data:updatedPost
   })


  }catch(error){
    return res.status(500).json({
        message:"error in updating post",
        data:[]
    })
  }

}

module.exports.deletePost = async(req,res)=>{
    try{
      const postId = req.params.id;
  
      const deletedPost =  await Post.findByIdAndDelete(postId);
  
     console.log("deletedPost", deletedPost);
  
     return res.status(200).json({
      message:"post deleted successfully",
     })
  
  
    }catch(error){
      return res.status(500).json({
          message:"error in updating post",
          data:[]
      })
    }
  
  }