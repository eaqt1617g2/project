var app = require('express');
var router = app.Router();

var Item = require('../models/item');
var Comment = require('../models/comment');
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

router.get('/order', function(req, res) {
    Item.find({ $query: {}, $orderby: { title : 1, quantityest:-1 } },
        function(err, items) {
            if (err)
                res.send(err);
            res.json(items);
        }
    );
});

router.get('/:id', function(req, res) {
    var o_id = new mongoose.Types.ObjectId(req.params.id);
    Item.findOne({_id: o_id}).populate('author','loginid displayname').populate('comments').exec(function(err, item) {
        if(err) {
            res.send(err);
        }
        res.json(item);
    });

});

router.post('/additem', function(req, res) {
    console.log(req.body.author);
    console.log(req.body.title);
    console.log(req.body.pic_id);
    Item.create({
        author: req.body.author,
        title: req.body.title,
        pic_id: req.body.pic_id
    }, function(err, item){
        if(err) {
            res.send(err);
        }
        Item.find(function(err, item) {
            if(err){
                res.send(err);
            }
            res.json(item);
        });
    });
});

router.post('/:id/comments', function(req, res) {
    //var o_id = new mongoose.Types.ObjectId(req.params.id);
    var comment = new Comment({
        content: req.body.content,
        author_loginid: req.body.author_loginid
    });
    comment.save(function(err, newComment) {
        if(err)
            res.send(err);
        Item.findOneAndUpdate(
            {_id: req.params.id},
            {$addToSet : {"comments": comment}},
            {},
            function(err, item) {
                if(err) {
                    res.send(err);
                    return;
                }
                Item.findOne({_id: req.params.id}).populate('author','loginid displayname').populate('comments').exec(function(err, item) {
                    if(err) {
                        res.send(err);
                        return;
                    }
                    res.json(item);
                });
            }
        );
    });
});

router.post('/:id/like', function(req, res) {
    if(req.body._id == undefined) {
        res.status(500).send("No id specified");
        return;
    }
    Item.findOneAndUpdate(
        {_id: req.params.id},
        {$addToSet : {"likes": req.body._id}},
        {},
        function(err, user) {
            if(err) {
                res.send(err);
            }
            Item.findOne({_id: req.params.id}).populate('author','loginid displayname').populate('comments').exec(function(err, item) {
                if(err) {
                    res.send(err);
                    return;
                }
                res.json(item);
            });
        }
    );
});

router.post('/:id/dislike', function(req, res) {
    if(req.body._id == undefined) {
        res.status(500).send("No id specified");
        return;
    }
    Item.findOneAndUpdate(
        {_id: req.params.id},
        {$pull : {"likes": req.body._id}},
        {},
        function(err, user) {
            if(err) {
                res.send(err);
            }
            Item.findOne({_id: req.params.id}).populate('author','loginid displayname').populate('comments').exec(function(err, item) {
                if(err) {
                    res.send(err);
                    return;
                }
                res.json(item);
            });
        }
    );
});

module.exports = router;

