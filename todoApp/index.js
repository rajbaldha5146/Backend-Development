//to import express module through require function
const express = require('express');
const app = express();

//load config from env file
require('dotenv').config();
const PORT = process.env.PORT || 5000;

//middlewere to parse json request body
app.use(express.json());

//import rotes from TODO API
const todoRoutes = require('./routes/todo');

//mount the todo API routes
app.use('/api/v1', todoRoutes);

//start server
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});

//connect to database
const dbConnect = require('./config/dataabase');
dbConnect();

//default Route
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to TODO API</h1>`);
});