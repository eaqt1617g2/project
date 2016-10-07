var mongoose = require('mongoose');

var User = mongoose.model('users', {
	nombre: String,
	apellidos: String,
	email: String
});

module.exports = User;