var app = require('express');
var router = app.Router();

var Item = require('../models/item');
var mongoose = require('mongoose');


router.get('/', function(req, res) {
    console.log(req.query.page);
    Item.find().populate('author', 'loginid').skip(parseInt(req.query.page)*6).limit(6).exec(function(err, items) {
        if(err) {
            res.send(err);
        }
        res.json(items);
    });

});

router.get('/:id', function(req, res) {
    var o_id = new mongoose.Types.ObjectId(req.params.id);
    Item.findOne({_id: o_id}, function(err, item) {
        if(err) {
            res.send(err);
        }
        res.json(item);
    });

});

module.exports = router;

