/**
 * Created by Jordi on 18/11/2016.
 */
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

        name: String,
        last_name: String,
        displayname: String,
        loginid: String,
        token: String,
        password: String,
        provider: String,
        provider_id: {type: String, unique: true},
        photo_user: String,
        photo_background: String,
        creation_date: {type: Date, default: Date.now},
        email: String,
        last_login_date: {type: Date, default: Date.now}

});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', userSchema);