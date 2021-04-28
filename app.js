 const express = require('express');
 const bodyParser = require('body-parser');
 const app = express();
 const mongoose = require('mongoose');
 app.use(bodyParser.json());

//Solving Access Control
 app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type, Origin, Accept');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
 });


 // import Routes
  const postRoute = require('./routes/posts');
  app.use('/posts', postRoute);

 //ROUTES
app.get('/', (req,res) => {
    res.send('We are home')
})

 app.get('/test', (req,res) => {
     res.send('We are home on test')
 })


 // //DB Connection
 // mongoose.connect("mongodb+srv://Livion:taktik12345@cluster0.nd7pn.mongodb.net/tasks?retryWrites=true&w=majority",
 //     { useUnifiedTopology: true ,
 //      useNewUrlParser: true }) .then((result) => console.log('Connected to DB'))
 //         .catch((error) => console.log('DBerror ' + error));

 mongoose.connect("mongodb://localhost:27017/SPP",
     { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
     .then((result) => console.log('Connected to DB' + result))
     .catch((error) => console.log('DBerror ' + error));

 //How to we start listening to the server
 app.listen(3000);
