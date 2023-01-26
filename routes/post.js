const router = require('express').Router();

const postController = require('../controllers/post');


const {verifyToken} = require("../security/verifyToken")

router.post("/post",verifyToken,postController.createPosts)
router.get("/post",verifyToken, postController.getPosts)

//update a post
router.put("/:id", postController.updatePost);
//delete post
router.delete("/postId/:id", postController.deletePost)





module.exports = router;



