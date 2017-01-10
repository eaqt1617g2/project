var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var users = require("./routes/users");
var items = require("./routes/items");
// INICIO ********************************** CÓDIGO PARA EL USO DE PASSPORT FACEBOOK, TWITTER, GOOGLE *************

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var routes = require('./routes/index');
var port = process.env.PORT || 2709;

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var session = require('express-session');

var configDB = require('./config/database.js');
mongoose.connect(configDB.url);


// FIN ********************************** CÓDIGO PARA EL USO DE PASSPORT FACEBOOK, TWITTER, GOOGLE *************
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


/* SE COMENTA PORQUE COGE LA Info DE la carpeta CONFIG
app.use("/users", users);
mongoose.connect('mongodb://localhost/project');*/

app.use(express.static('../public'));
app.use('/', express.static('../public/views'));
app.use('/access', express.static('../public/views/loginRegister.html'));
app.use('/adminPanel', express.static('../public/views/admin/admin.html'));

// INICIO ********************************** CÓDIGO PARA EL USO DE PASSPORT FACEBOOK, TWITTER, GOOGLE *************


app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(favicon(path.join(__dirname, '../public/favicon.ico')));

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'secretString',
    cookie: {secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', routes);
app.use('/users', users);
app.use('/items', items);

require('./config/passport')(passport);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        console.log('Error: '+err.message);
    });
}
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log('Error: '+err.message);
});


// FIN ********************************** CÓDIGO PARA EL USO DE PASSPORT FACEBOOK, TWITTER, GOOGLE *************

// Escucha en el puerto 2709 y corre el server
app.listen(2709, function() {
    console.log('App listening on port 2709');
});

module.exports = app;

