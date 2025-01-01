const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log("Server Started At Port Number 3000")
})

// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })
  
  // POST method route
  app.post('/api/cars', (req, res) => {
    const {name, brand} = req.body;
    console.log(name, brand);
    res.send('Cars submited successfully')
  })

  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/cars', 
    {useNewUrlParser: true, 
      useUnifiedTopology: true
    })
    .then(()=> {console.log('Connected to MongoDB')})
    .catch((err)=> {console.log('Error connecting to MongoDB')});    