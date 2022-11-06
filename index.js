 //Q1:- How do you create a simple Express.js application?
 const express = require('express')

 const App = express();
 App.get('/',(req,res)=>{
  res.send('This is Home Page');
  console.log(req);
 })
 
 App.get('/About',(req,resp)=>{
     resp.send('This is About Page');
     console.log(req);
    })
 
 
 
 App.listen('5050',function() {
     console.log('Hi Everyone ');
 })


 // Q2:-Create a middleware which will be applicable to all the routes

const express = require("express");
const app = express();
const port = process.env.port || 8080;

const middleWare1 = function (req,res,next ) {
  console.log("This is local Middleware");
  next();
};

const MiddleWare2 = function (req,res,next ) {
  console.log("this is Global Middleware");
  next();
};

app.use(MiddleWare2);

app.get("/",  function (req, res) {
  res.send("<h1>Home page of This Server<h1>");
  console.log(req);
});
app.get("/About", middleWare1, function (req, res) {
  res.send(
    "<h1>This is About Page<h1>"
  );
  console.log(req);
});
app.get("/signup",middleWare1, function (req, res) {
  res.send("<h1>This is Signup page<h1>");
  console.log(req);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 
 //Q3:-Implement CORS.

const cors = require('cors')
app.use(cors())
app.get('/home',about,(req,res)=>{
    console.log('hello');
})


//Q4:-Implementation of all type of exports in backend application

function defaul(req,res){
    res.send("default exports")
}
function named(req,res) {
    res.send('named exports')
}
module.exports = defaul;//default export
module.exports = {named};//named export