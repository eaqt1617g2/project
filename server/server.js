var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var users = require("./routes/users");
// INICIO ********************************** CÓDIGO PARA EL USO DE PASSPORT FACEBOOK, TWITTER, GOOGLE *************
var passport = require('passport'); // Passport: Middleware de Node que facilita la autenticación de usuarios
// Importamos el modelo usuario y la configuración de passport
var routes = require('./routes/index_auth'); // Dónde tenemos la configuración de las rutas
require('./models/user_auth');
require('../passport')(passport);
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var jade = require('jade');
var router = express.Router();
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser')
var errorhandler = require('errorhandler')
var session = require('express-session')
// FIN ********************************** CÓDIGO PARA EL USO DE PASSPORT FACEBOOK, TWITTER, GOOGLE *************
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/users", users);

mongoose.connect('mongodb://localhost/project');


app.use(express.static('../public'));
app.use('/', express.static('../public/views'));
app.use('/login', express.static('../public/views/loginRegister.html'));
app.use('/adminPanel', express.static('../public/views/admin/admin.html'));

// INICIO ********************************** CÓDIGO PARA EL USO DE PASSPORT FACEBOOK, TWITTER, GOOGLE *************

//PARA USAR PASSPORT JADE
app.set('views', path.join(__dirname, '../public/views/jade'));
app.set('view engine', 'jade');
app.use(favicon(__dirname + '/favicon.ico'));
app.use(logger('dev'));
// Middlewares de Express que nos permiten enrutar y poder
// realizar peticiones HTTP (GET, POST, PUT, DELETE)
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride());

// Ruta de los archivos estáticos (HTML estáticos, JS, CSS,...)
app.use(express.static(path.join(__dirname, '../public/views/jade')));
// Indicamos que use sesiones, para almacenar el objeto usuario
// y que lo recuerde aunque abandonemos la página
app.use(session({
    secret: 'lollllo',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// Configuración de Passport. Lo inicializamos
// y le indicamos que Passport maneje la Sesión
app.use(passport.initialize());
app.use(passport.session());
//app.use(app.router);
// Si estoy en local, le indicamos que maneje los errores
// y nos muestre un log más detallado
if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler())
}



/* Rutas de la aplicación */
// Cuando estemos en http://localhost:puerto/ (la raiz) se ejecuta el metodo index
// del modulo 'routes'
app.get('/auth', routes.index_auth);

/* Rutas de Passport */
// Ruta para desloguearse
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});
// Ruta para autenticarse con Twitter (enlace de login)
app.get('/auth/twitter', passport.authenticate('twitter'));
// Ruta para autenticarse con Facebook (enlace de login)
app.get('/auth/facebook', passport.authenticate('facebook'));
// Ruta para autenticarse con Google (enlace de login)
app.get('/auth/google',
    passport.authenticate('google', { scope:
        [ 'https://www.googleapis.com/auth/plus.login',
            , 'https://www.googleapis.com/auth/plus.profile.emails.read' ] }
    ));
// Ruta de callback, a la que redirigirá tras autenticarse con Twitter.
// En caso de fallo redirige a otra vista '/login'
app.get('/auth/twitter/callback', passport.authenticate('twitter',
    { successRedirect: '/', failureRedirect: '/login' }
));
// Ruta de callback, a la que redirigirá tras autenticarse con Facebook.
// En caso de fallo redirige a otra vista '/login'
app.get('/auth/facebook/callback', passport.authenticate('facebook',
    { successRedirect: '/', failureRedirect: '/login' }
));
// Ruta de callback, a la que redirigirá tras autenticarse con Google.
// En caso de fallo redirige a otra vista '/login'
app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
    }));
// FIN ********************************** CÓDIGO PARA EL USO DE PASSPORT FACEBOOK, TWITTER, GOOGLE *************

// Escucha en el puerto 2709 y corre el server
app.listen(2709, function() {
    console.log('App listening on port 2709');
});

module.exports = app;

