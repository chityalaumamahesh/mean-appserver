var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//what happens in each request from client
var port = process.env.PORT || 3400;
var path =require('path');
var routes = require('./routes/appRoutes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',routes);
//app.use(cors());
var mongoose = require('./config/config');
app.get("/",(req,res)=>{
	res.send("Page not found");
	console.log("Page not found")
});
app.listen(port,()=>{
	 console.log("server started listening!................")
})
module.exports = app;
