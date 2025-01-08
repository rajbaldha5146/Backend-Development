// Import Mongoose 
const mongoose = require('mongoose')


// Route Handler 
const commentSchema = new mongoose.Schema({
    //which post you are commenting on
    post:{
        //id refer of the post model
        type:mongoose.Schema.Types.ObjectId,
        //reference to the post model
        ref : "Post" 
    },
    //who is commenting on the post
    user: {
        type:String,
        required:true,
    }, 
    //what is the comment on the post   
    body: {
        type:String,
        required:true,
    }    
})


// Export 
module.exports = mongoose.model("Comment",commentSchema)