var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var crypto = require('crypto');
var bcrypt = require('bcryptjs');

var userModels = require('../models/userModel');
var registerModel = require('../models/registerModel');

var secKey = require('../secret/config');

//home page, register, login , profile
router.get("/authenticate", function(req, res){
	console.log('entered into login API',req.query)
	registerModel.register.findOne({userName: req.query.userName, password: req.query.password}, function(err, data){
		if(err){
			console.err(err)
		}
		else{
			crypto.randomBytes(256, function(ex, buf){
				console.log('crypto randomBytes entered')
				if (ex){
					console.log("while login "+ex)
				}else{

				var token;
				token = jwt.sign({
					//id: data._id,
					firstName: data.firstName,
					lastName: data.lastName,
					userName: data.userName,
					password: data.password
					},
					secKey.secret,
					{expiresIn: 86400 }//exp[ires in 24 hours]}
				);
				res.status(200);
				/*res.json({
					"token":token
				})*/
				res.send({ auth: true, token: token,data:data });
				}	

			})
		}
	})
})
router.post("/register",function(req, res){
	console.log("entered into register API");
	//registerModel.register
	//var hashedPassword = bcrypt.hashSync(req.body.password, 8);
	var registerObj = new registerModel.register({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		userName: req.body.userName,
		password: req.body.password
	})
	registerObj.save(function(err){
		if(err){
			console.err(err);
		}else{
			res.setHeader('Content-Type', 'application/text');
			res.send('Register successfully..')
			res.end();
		}

	})
})
router.get('/getUserDetails',function(req, res){
	console.log('entered into getUserDetails API',req.headers)
	var token = req.headers['Authorization'];
		jwt.verify(token, secKey.secret, function(err, decoded){
			if(!token){
				res.status(500);
				res.send({auth:false, message:'Failed to authenticate token'});	
			}else{
				registerModel.register.find(function(err, data){
					if(err){
						console.err(err)
					}else{
						res.setHeader('Content-Type', 'application/json');
						res.status(200);
						res.send(data);
					}
				})
			}
		})	
			
})
//var routes = require('./routes/appRoutes');
router.get("/home",function(req, res){
	console.log(req.headers);
	console.log('entered into home page');
	var token = req.headers['x-access-token'];
	if(!token) {
		res.status(401);
		res.send({auth:false,message:'No token provided'});
	}
	jwt.verify(token, secKey.secret, function(err, decoded){
		if(err){
			res.status(500);
			res.send({auth:false, message:'Failed to authenticate token'});
		}else{
			res.status(200);
			res.send(decoded);
		}
	})
});
router.get("/user",(req,res)=>{
	//res.send('Home page');
	console.log("user page entered");
	userModels.user.find(function(err, users){
		if (err) {
            res.send(err);
        } else {
        	res.setHeader('Content-Type', 'application/json');
        	//res.writeHead(200)
            //res.send(JSON.stringify(users));
            res.send(users)
            console.log("users",users);
        }
	})
	
})
router.post("/save",(req,res)=>{
	console.log("entered into save")
	var Bee = new userModels.user({
     name: req.body.name,
     hero: req.body.hero
 	});
	 Bee.save(function(error) {
	     
	 	if (error) {
	     console.error(error);
	  }
	  console.log("Your bee has been saved!");
	     res.setHeader('Content-Type', 'application/text');
	     res.send('Your bee has been saved')
	     res.end()
	 });
	/*res.send("login page");
	console.log("login page ");*/
})
module.exports = router;