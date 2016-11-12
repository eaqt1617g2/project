/**
 * Created by Jordi on 12/11/2016.
 */
// Modelo Usuario para la base de datos

// Mongoose es una libreria de Node que nos permite
// conectarnos a una base de datos MongoDB y modelar un esquema
// para ella.
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Campos que vamos a guardar en la base de datos
var UserSchema = new Schema({
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

// Exportamos el modelo 'User_auth' para usarlo en otras
// partes de la aplicación
var User_auth = mongoose.model('User_auth', UserSchema);