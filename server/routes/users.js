var app = require('express');
var router = app.Router();

var User = require('../models/user');

router.get('/', function(req, res,next) {

    var users=[{"name":"joan"}, {"name":"pepe"}];
    res.json(users);

});

router.get('/:id', function(req, res,next) {

    var users=[{"name":"XXXX"}];
    res.json(users);

});

module.exports = router;