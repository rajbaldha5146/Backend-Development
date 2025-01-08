// Purpose: To connect to the database

//to import mongoose module through require function 
const mongoose = require("mongoose");

//to load environment variables from .env file
//feed the environment variables to the process.env object
require("dotenv").config();

//function to istablish conection beetwen the server and the database 
const dbConnect = () => {
  //this is a one type of promise that's why we use then and catch
  mongoose
    .connect(process.env.DATABASE_URL, {
      //to avoid deprecation warnings
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    //to log message if connected to database
    .then(() => console.log("Connected to database"))

    //to log error message if not connected to database
    .catch((err) => {
      console.log("Error in connecting to database");
      console.error('Error connecting to MongoDB:', err);
      //to exit the process if not connected to database
      process.exit(1);
    });
};
//export the dbConnect function
module.exports = dbConnect;
