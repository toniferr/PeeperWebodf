var express = require("express"); 
var multer = require('multer');  //for file handling
var util = require('util');
var app = express();   // init express app

app.use(express.static('app')); // use this as resource  directory

 //APP ROUTING URL => FUNCTIONS
 app.get('/', function (req, res) {
  res.sendFile(__dirname + "/app/index.html");
 });
 // this means when we get a request on 'myAppContext/' url provide index.html


//START THE SERVER 
app.listen(3000, function () {
    console.log("Listening on port 3000");
});