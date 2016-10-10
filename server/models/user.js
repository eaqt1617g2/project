var mongoose = require('mongoose');

var User = mongoose.model('users', {
	name: String,
	last_name: String,
	loginid: String,
	password: String,
	creation_date: Date,
	email: String,
	last_login_date: Date
});

module.exports = User;