const mongoose = require('mongoose');

//to create a schema for todo model
const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 50,
        },
        description: {
            type: String,
            required: true,
            maxLength: 50,
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now(),
        }
    }
);

//module.exports = mongoose.model('ModelName', schemaObject);
//ModelName: A string that represents the name of the collection in the database
//schemaObject: The schema defining the structure of documents in the collection.
module.exports = mongoose.model('Todo', todoSchema);