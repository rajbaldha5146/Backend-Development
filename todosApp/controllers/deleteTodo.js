//import the model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async (req, res) => {
    try {
        //get the id from the request params
        const { id } = req.params;
        //find the todo item by id and delete it
        await Todo.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "Todo deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};