/*var crypto = require('crypto');
var jwt = require('jsonwebtoken');
crypto.randomBytes(256, function(ex, buf){
	if(ex) throw ex;
	var token = jwt.sign(user,'12345');
	//var decoded = jwt.verify(token, buf);
});
module.exports = {
	'secret': crypto
}*/

module.exports = {
  'secret': 'supersecret'
};