const express = require('express');
const router = express.Router();

//import controller
const { createTodo } = require("../controllers/createTodo");
const { getTodos, getTodoById } = require("../controllers/getTodos");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");

//define API routes

//for creating a new todo item
router.post("/createTodo", createTodo);
//for fetching all todo items
router.get("/getTodos", getTodos);
//for fetching a single todo item by id
router.get("/getTodos/:id", getTodoById);
//for updating a todo item by id
router.put("/updateTodo/:id", updateTodo);
//for deleting a todo item by id
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router; 