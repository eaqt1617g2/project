var mongoose = require('mongoose');

var User = mongoose.model('users', {
	name: String,
	last_name: String,
	loginid: String,
	password: String,
	provider: String,
	provider_id: {type: String, unique: true},
	photo_user: String,
	photo_background: String,
	creation_date: {type: Date, default: Date.now},
	email: String,
	last_login_date: {type: Date, default: Date.now}
});

module.exports = User;
// Exportamos el modelo 'User_auth' para usarlo en otras
// partes de la aplicación
