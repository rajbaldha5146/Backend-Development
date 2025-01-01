const express = require("express");
//to create a new router object
const router = express.Router();

// Importing the createTodo controller
const { createTodo } = require("../controllers/createTodo");

// difine API routes
router.post("/createTodo", createTodo);

module.exports = router;
