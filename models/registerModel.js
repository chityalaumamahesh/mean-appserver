var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var regitsterSchema = new Schema({
	firstName: String,
	lastName: String,
	userName: {type:String, required:true, unique: true},
	password: {type:String, required:true, unique: true},
	mobileNo: String, 
	created: {
		type:Date,
		default: Date.now
	}
})
var register = mongoose.model('registers', regitsterSchema);
module.exports.register = register;