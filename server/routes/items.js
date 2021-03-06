var app = require('express');
var router = app.Router();

var Item = require('../models/item');
var User = require('../models/user');
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

// sin testear
router.get('/discover', function(req, res) {
    var to = new Date();
    var from = new Date('2017,01,20');
    console.log("from: "+from.toString());
    console.log("to: "+to.toString());
    Item.find({
        creation_date:{$gt: from}
    }).populate('author', 'loginid').sort({likes_count: -1}).skip(parseInt(req.query.page)*6).limit(6).exec(function(err, items) {
        if(err) {
            res.send(err);
        }
        res.json(items);
    });
});

//pendiente
router.get('/friends', function(req, res) {
    User.findOne({_id: req.query.id}).exec(function(err, user) {
        if (err) {
            res.send(err);
        }
        console.log(user.displayname);
        console.log(JSON.stringify(user.following));
        Item.find({author: {$in: user.following}}).populate('author', 'loginid').skip(parseInt(req.query.page) * 6).limit(6).exec(function (err, items) {
            if (err) {
                res.send(err);
            }
            res.json(items);
        });
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
    Item.findOne({_id: o_id}).populate('author','loginid displayname').exec(function(err, item) {
        if(err) {
            res.send(err);
        }
        res.json(item);
    });

});

router.post('/additem', function(req, res) {

    require("fs").writeFile("../public/assets/imgs/items/" + req.body.pic_id, req.body.base64, 'base64', function(err) {
        if (err) throw err;
        Item.create({
            author: req.body.author,
            title: req.body.title,
            pic_id: req.body.pic_id,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        }, function(err, item){
            if(err) {
                res.send(err);
            }else {
                Item.find(function (err, item) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.json(item);
                    }
                });
            }
        });
    });
});

router.post('/additemApp', function(req, res) {
    console.log(req.body.author);
    console.log(req.body.title);
    console.log(req.body.base64);

    require("fs").writeFile("../public/assets/imgs/items/" + req.body.pic_id, req.body.base64, 'base64', function(err) {
        if (err) throw err;
        Item.create({
            author: req.body.author,
            title: req.body.title,
            pic_id: req.body.pic_id
        }, function(err, item){
            if(err) {
                res.send(err);
            }else {
                Item.find(function (err, item) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.json(item);
                    }
                });
            }
        });
    });
});

router.get('/:id/comments', function(req, res) {
    Comment.find({item: req.params.id}).sort({creation_date: -1}).populate('author', 'loginid photo_user').skip(parseInt(req.query.page) * 10).limit(10).exec(function (err, comments) {
        if (err) {
            res.send(err);
        }
        res.json(comments);
    });
});

router.post('/:id/comments', function(req, res) {
    //var o_id = new mongoose.Types.ObjectId(req.params.id);
    var comment = new Comment({
        item: req.params.id,
        content: req.body.content,
        author: req.body.author
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
                Comment.find({item: req.params.id}).sort({creation_date: -1}).populate('author', 'loginid photo_user').skip(parseInt(req.query.page)*10).limit(10).exec(function(err, comments) {
                    if(err) {
                        res.send(err);
                    }
                    res.json(comments);
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
        {$addToSet : {"likes": req.body._id}, $inc: { likes_count: 1 }},
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
        {$pull : {"likes": req.body._id}, $inc: { likes_count: -1 }},
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

