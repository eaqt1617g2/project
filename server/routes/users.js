var app = require('express');
var router = app.Router();

var User = require('../models/user');

router.get('/', function(req, res,next) {

  //  var users=[{"name":"joan"}, {"name":"pepe"}];
   // res.json(users);

    User.find(function(err, todos) {
        if(err) {
            res.send(err);
        }
        res.json(todos);
    });

});

router.get('/:id', function(req, res,next) {

    var users=[{"name":"XXXX"}];
    res.json(users);

});

module.exports = router;