var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/user');
var configAuth = require('./auth');
var fs = require('fs');
var request = require('request');

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

var makeid = function()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 25; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        function(req, email, password, done) {
            process.nextTick(function() {
                User.findOne({ 'email': email }, function(err, user) {
                    console.log('entro en sign up');
                    if (err)
                        return done(err);
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already in use.'));
                    } else {
                        var randomtoken = "";
                        var randomid = "";
                        var charid = "abcdefghijklmnopqrstuvwxyz0123456789";
                        var chartoken = "abcdefghijklmnopqrstuvwxyz0123456789~!@#$&*()_+-{}[]?/ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                        for( var i=0; i < 32; i++ )
                            randomtoken += chartoken.charAt(Math.floor(Math.random() * chartoken.length));
                        for( var i=0; i < 16; i++ )
                            randomid += charid.charAt(Math.floor(Math.random() * charid.length));
                        var newUser = new User();
                        newUser.email = email;
                        newUser.provider = 'local';
                        newUser.provider_id = randomid;
                        newUser.password = newUser.generateHash(password);
                        newUser.loginid = req.body.loginid;
                        newUser.name = req.body.name;
                        newUser.last_name = req.body.last_name;
                        newUser.displayname = (req.body.name + ' ' + req.body.last_name);
                        newUser.token = randomtoken;
                        newUser.photo_user = req.body.photo_user;
                        newUser.photo_background = req.body.photo_background;
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });
            });
        }));

    passport.use('local-login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true,
        },
        function(req, email, password, done) {
            User.findOne({ 'email':  email , 'provider':'local' }, function(err, user) {
                console.log('entro en login local');
                if (err)
                    return done(err);
                if (!user || !user.validPassword(password)){
                    return done(null, false, req.flash('loginMessage', 'User not found or Wrong password.'));
                } else {
                    var randomtoken = "";
                    var chartoken = "abcdefghijklmnopqrstuvwxyz0123456789~!@#$&*()_+-{}[]?/ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    for( var i=0; i < 32; i++ )
                        randomtoken += chartoken.charAt(Math.floor(Math.random() * chartoken.length));
                    user.token = randomtoken;
                    user.last_login_date=new Date().toISOString();
                    user.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, user);
                    });

                }
                //if (!user.validPassword(password))
                  //  return done(null, false, req.flash('loginMessage', 'Wrong password.'));
            });
        }));
    passport.use(new FacebookStrategy({
            clientID: configAuth.facebookAuth.clientID,
            clientSecret: configAuth.facebookAuth.clientSecret,
            callbackURL: configAuth.facebookAuth.callbackURL,
            includeEmail: true,
            profileFields : ['id', 'email','first_name','last_name','picture.type(large)']
        },
        function(token, refreshToken, profile, done) {
            process.nextTick(function() {
                User.findOne({ 'provider_id': profile.id }, function(err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        user.token=token;
                        user.last_login_date=new Date().toISOString();
                        user.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, user);
                        });
                    } else {
                        var newUser = new User();
                        newUser.provider_id = profile.id;
                        newUser.provider = profile.provider;
                        newUser.token = token;
                        newUser.name = profile.name.givenName;
                        newUser.last_name = profile.name.familyName;
                        newUser.displayname = (profile.name.givenName + ' ' + profile.name.familyName);
                        newUser.email = (profile.emails[0].value || '').toLowerCase();
                        newUser.loginid	= newUser.email.substr(0,newUser.email.indexOf("@"));
                        newUser.photo_user = profile.photos[0].value;


                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });
            });
        }));
    passport.use(new TwitterStrategy({
            consumerKey: configAuth.twitterAuth.consumerKey,
            consumerSecret: configAuth.twitterAuth.consumerSecret,
            callbackURL: configAuth.twitterAuth.callbackURL,
            includeEmail: true
        },
        function(token, tokenSecret, profile, done) {
            process.nextTick(function() {
                User.findOne({ 'provider_id': profile.id }, function(err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        user.token=token;
                        user.last_login_date=new Date().toISOString();
                        user.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, user);
                        });
                    } else {
                        var newUser = new User();
                        var photo_id = makeid();
                        download(profile.photos[0].value.replace("_normal",""), "../public/assets/imgs/profiles/"+photo_id, function(){
                            console.log('Foto de twitter descargada');
                        });
                        newUser.provider_id          = profile.id;
                        newUser.provider = profile.provider;
                        newUser.token       = token;
                        newUser.displayname = profile.displayName;
                        newUser.last_name = profile.familyName;
                        newUser.email = (profile.emails[0].value || '').toLowerCase();
                        newUser.loginid	= profile.username;
                        newUser.photo_user = profile.photos[0].value.replace("_normal","");
                        newUser.photo_id = photo_id;
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });
            });
        }));
    passport.use(new GoogleStrategy({
            clientID: configAuth.googleAuth.clientID,
            clientSecret: configAuth.googleAuth.clientSecret,
            callbackURL: configAuth.googleAuth.callbackURL,
        },
        function(token, refreshToken, profile, done) {
            process.nextTick(function() {
                User.findOne({ 'provider_id': profile.id }, function(err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        user.token=token;
                        user.last_login_date=new Date().toISOString();
                        user.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, user);
                        });
                    } else {
                        var newUser = new User();
                        newUser.provider_id = profile.id;
                        newUser.provider = profile.provider;
                        newUser.token = token;
                        newUser.displayname = profile.displayName;
                        newUser.email = profile.emails[0].value;
                        newUser.loginid	= newUser.email.substr(0,newUser.email.indexOf("@"));
                        newUser.photo_user = profile.photos[0].value;
                        newUser.name = profile.name.givenName;
                        newUser.last_name = profile.name.familyName;


                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }
                });
            });
        }));


};