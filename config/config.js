/*mongoose.Promise = global.Promise;
mongoose.connect(config.db).then(
    () => { console.log('Database Connected') },
    err = function() { console.log('can not connect to database' + err) }
);*/

/*var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/mydb",function(err,db){
	if(err) throw err;
	else{
		console.log("connected to database");
	}
});

module.exports = MongoClient;*/


var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/mydb").then(function(){
		   console.log('Successfully connected');
			},function(err){
				console.log("unable to connect db", + err);
			})
module.exports = mongoose;