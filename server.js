var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(function(req, res, next) {
	console.log('cors calll')
  	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    res.header('Access-Control-Request-Headers', 'Content-Type');
  next();
});
/*app.use(function(req,res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
//res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
res.setHeader('Access-Control-Allow-Methods', '*');
//res.setHeader('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
//res.setHeader('Access-Control-Max-Age', '1000');
})*/
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
//added while test with mocha framework
if(!module.parent) {

	app.listen(port,()=>{
		 console.log("server started listening!................")
	})
 }
module.exports = app;
