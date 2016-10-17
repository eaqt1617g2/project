var mongoose = require('mongoose');

var User = mongoose.model('users', {
	name: String,
	last_name: String,
	loginid: String,
	password: String,
	creation_date: {type: Date, default: Date.now},
	email: String,
	last_login_date: {type: Date, default: Date.now}
});

module.exports = User;