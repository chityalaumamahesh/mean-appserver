var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    id: String,
    dept: String,
    created: {
        type: Date,
        default: Date.now
    }
})

var user = mongoose.model('users', userSchema);
module.exports.user = user;