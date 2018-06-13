var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    hero: String,
    created: {
        type: Date,
        default: Date.now
    }
})

var user = mongoose.model('movies', userSchema);
module.exports.user = user;