//import th model
const Todo = require("../models/Todo");

//define route handler

exports.updateTodo = async (req, res) => {
  try {
    //get the id from the request params second way
    const { id } = req.params;
    //get the title and description from the request body
    const { title, description } = req.body;

    //find the todo item by id and update it
    //findByIdAndUpdate method is used to find a matching document and update it
    const todo = await Todo.findByIdAndUpdate(
      {
        //find the todo item by id
        _id: id,
      },
      {
        //update the title and description
        title,
        description,
        updateAt: Date.now(),
      }
    );
    res.status(200).json({
      success: true,
      data: todo,
      message: "Update Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
