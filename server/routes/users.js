var app = require('express');
var router = app.Router();

var User = require('../models/user');
var mongoose = require('mongoose');

router.get('/', function(req, res,next) {

    User.find(function(err, todos) {
        if(err) {
            res.send(err);
        }
        res.json(todos);
    });

});

router.get('/:id', function(req, res,next) {
    var o_id = new mongoose.Types.ObjectId(req.params.id);
    User.findOne({_id: o_id}, function(err, user) {        
        if(err) {
            res.send(err);
        }
        res.json(user);
    });

});


router.put('/:id', function(req, res) {
    var o_id = new mongoose.Types.ObjectId(req.params.id);
    User.update(
        {
            _id: o_id 
        },
        {            
            password: req.body.password,
            name: req.body.name,
            last_name: req.body.last_name,
            email: req.body.email
        },        
    function(err, user){
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
    var o_id = new mongoose.Types.ObjectId(req.params.id);
    User.remove({
        _id: o_id
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
        email: req.body.email       
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