var cors = require('cors');
var express     = require('express');
var app         = express();
var mongoose     = require('mongoose');


app.use(cors());
var bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

