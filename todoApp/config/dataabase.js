// Purpose: To connect to the database
const mongoose = require("mongoose");

//to load environment variables from .env file
require("dotenv").config();

//function to istablish conection beetwen the server and the database
const dbConnect = () => {
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
