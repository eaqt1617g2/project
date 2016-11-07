var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var users = require("./routes/users");

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


// Escucha en el puerto 2709 y corre el server
app.listen(2709, function() {
    console.log('App listening on port 2709');
});

module.exports = app;

