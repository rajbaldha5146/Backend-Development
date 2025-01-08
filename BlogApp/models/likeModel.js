// Import Mongoose
const mongoose = require("mongoose");

// Route Handler
const likeSchema = new mongoose.Schema({
  //which post you are liking
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", //reference to the post model
  },
  //who is liking the post
  user: {
    type: String,
    required: true,
  },
});

// Export
module.exports = mongoose.model("Like", likeSchema);
