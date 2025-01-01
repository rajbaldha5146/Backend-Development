// createTodo controller main work is to create a new todo and save it to the database.
// It will take the title and description from the request body and create a new todo
// with the given title and description. If the todo is created successfully,
// it will send a success response with the created todo.
// If there is an error while creating the todo, it will send an error response
// with the error message.

//to import the Todo model
const Todo = require("../models/todo");

//to create route handler for creating a new todo
//why we create async function? because our other code flow is don't affected by this function
exports.createTodo = async (req, res) => {
  try {
    // extrect the title and description from the request body
    const { title, description } = req.body;

    // Creating a new todo
    const response = await Todo.create({
      title,
      description,
    });

    // Sending the response back to the client
    res.status(201).json({ data: response });

    // Sending the response with a success flag
    res.status(500).json({
      success: true,
      data: response,
      message: "entry created successfully",
    });
  } catch (error) {
    // Sending the response with an error message
    console.error(error);
    console.log(error);
    //res.status(500) means internal server error1
    res.status(500).json({
      success: false,
      data: "internal server error1",
      message: error.message,
    });
  }
};
