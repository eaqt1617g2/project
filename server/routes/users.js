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


router.put('/api/users/:user', function(req, res) {
    User.update({
        id: req.params.user
        //loginid: req.body.loginid
        password: req.body.password,
        name: req.body.name,
        last_name: req.body.last_name,
        email: req.body.email,

        done: false
    }, function(err, user){
        if(err) {
            res.send(err);
        }

        User.find(function(err, users) {
            if(err){
                res.send(err);
            }
            res.json(users);
        });
    });
});


router.post('/api/users', function(req, res) {
    User.create({
        id: req.body.id
        loginid: req.body.loginid
        password: req.body.password,
        name: req.body.name,
        last_name: req.body.last_name,
        email: req.body.email,
        done: false
    }, function(err, user){
        if(err) {
            res.send(err);
        }

        User.find(function(err, users) {
            if(err){
                res.send(err);
            }
            res.json(users);
        });
    });
});

module.exports = router;