// import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

// business Logic
exports.createComment = async (req, res) => {
  try {
    // fetch data from request body
    const { post, user, body } = req.body;

    // create comment object before saving it to the db
    const comment = new Comment({
      post,
      user,
      body,
    });

    // save the new comment object into the db
    const savedComment = await comment.save();

    // Find the Post By Id and the new comment to add its comment array
    const updatedPost = await Post.findByIdAndUpdate(
      // search post id from the post model  
      post,
      // push the new comment to the comments array
      // $push is a update operator that adds a new value to an array
      // what type of data you want to push {comments name array : what you want to push it's id}
      { $push: { comments: savedComment._id } },
      // return the new updated post
      { new: true }
    )   
      // populate the comments array with the comment model  
      .populate("comments") 
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Error while creating comment",
    });
  }
};
