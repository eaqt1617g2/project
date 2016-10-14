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

    User.findOne(function(err, user) {
        _id: req.params.id
        if(err) {
            res.send(err);
        }
        res.json(user);
    });

});


router.put('/:id', function(req, res) {
    User.update({
        _id: req.params.id,
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


router.delete('/:id', function(req, res) {
    User.remove({
        _id: req.params.id
    }, function(err, user) {
        if(err){
            res.send(err);
        }

        User.find(function(err, users) {
            if(err){
                res.send(err);
            }
            res.json(users);
        });

    })
});


router.post('/', function(req, res) {
    User.create({
        loginid: req.body.loginid,
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