var app = require('express');
var router = app.Router();

var User = require('../models/user');
var Item = require('../models/item');
var Comment = require('../models/comment');
var mongoose = require('mongoose');


//GET users listing. LOGIN
/*
 router.get('/', function(req, res, next) {
 res.send('respond with a resource');
 });
 */

router.get('/my', isLoggedIn, function(req, res) {
    res.send(req.user);
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated())
        return next();

    res.status(400).send('User not logged in');
};

router.get('/', function(req, res) {

    User.find(function(err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
    });

});

router.get('/filter', function(req, res) {
   User.find({'loginid': new RegExp(req.query.loginid, 'i')}, function(err, users) {
       if(err)
           res.send(err);
       res.json(users);
   });
});

router.get('/order', function (req, res){
    User.find({ $query: {}, $orderby: { name : 1, quantityest:-1 } },
        function(err, todos) {
            if (err)
                res.send(err);
            res.json(todos);
        }
    );
});


router.get('/:loginid', function(req, res,next) {
    User.findOne({loginid: req.params.loginid}).populate('followers', 'loginid displayname photo_user photo_id').populate('following', 'loginid displayname photo_user photo_id').exec(function(err, user) {
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

//La id es el loginid
router.put('/:id/edit/displayname', function(req, res) {
    User.update(
        {
            loginid: req.params.id
        },
        {
            displayname: req.body.displayname
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

router.put('/:id/edit/password', function(req, res) {
    User.update(
        {
            loginid: req.params.id
        },
        {
            password: (new User).generateHash(req.body.password)
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

router.put('/:id/edit/photo', function(req, res) {

    require("fs").writeFile("../public/assets/imgs/profiles/" + req.body.photo_id, req.body.base64, 'base64', function(err) {
        if (err) throw err;
        User.update(
            {
                loginid: req.params.id
            },
            {
                photo_id: req.body.photo_id
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
    console.log('el usuario que llega es: ' + req.body.loginid);
    User.create({
        loginid: req.body.loginid,
        password: req.body.password,
        name: req.body.name,
        last_name: req.body.last_name,
        email: req.body.email,
        displayname: req.body.name + ' ' + req.body.last_name,
        provider: 'local'
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

router.post('/android', function(req, res) {
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
    });

});

router.get('/:loginid/items', function(req, res) {
    var o_id = undefined;
    User.findOne({loginid: req.params.loginid}, function(err, user) {
        if(err) {
            res.send(err);
        }
        o_id = user._id;
        Item.find({author: o_id}).populate('author', 'loginid').skip(parseInt(req.query.page)*6).limit(6).exec(function(err, items) {
            if(err) {
                res.send(err);
            }
            res.json(items);
        });
    });
});

router.get('/:loginid/itemsorder', function(req, res) {
    User.findOne({loginid: req.params.loginid}, function(err, user) {
        if(err) {
            res.send(err);
        }
        o_id = user._id;
        Item.find({author: o_id}).populate('author', 'loginid').skip(parseInt(req.query.page)*6).limit(6).exec(function(err, items) {
            if(err) {
                res.send(err);
            }
            res.json(items);
        });
    });
});

//Función para hacer follow a otro usuario. En la url aparece el loginid del usuario que va a seguir a otro.
//En el body aparece la id del usuario al que se le hace follow
//Devuelve el usuario al que se ha seguido
router.post('/:loginid/follow', function(req, res) {
    if(req.body._id == undefined) {
        res.status(500).send("No id specified");
        return;
    }
    User.findOneAndUpdate(
       {loginid: req.params.loginid},
       {$addToSet : {"following": req.body._id}},
       {},
       function(err, user) {
           if(err) {
               res.send(err);
           }
           User.findOneAndUpdate(
               {_id: req.body._id},
               {$addToSet : {"followers": user._id}},
               {},
               function(err, user2) {
                   if(err) {
                       res.send(err);
                   }
                   User.findOne({_id: req.body._id}).populate('followers', 'loginid displayname photo_user photo_id').populate('following', 'loginid displayname photo_user photo_id').exec(function(err, user) {
                       if(err) {
                           res.send(err);
                       }
                       res.json(user);
                   });
               }
           )
       }
    );
});

//Igual que la función de follow pero en lugar de añadir al array, substraer(pull)
router.post('/:loginid/unfollow', function(req, res) {
    if(req.body._id == undefined) {
        res.status(500).send("No id specified");
        return;
    }
    User.findOneAndUpdate(
        {loginid: req.params.loginid},
        {$pull : {"following": req.body._id}},
        {},
        function(err, user) {
            if(err) {
                res.send(err);
            }
            User.findOneAndUpdate(
                {_id: req.body._id},
                {$pull : {"followers": user._id}},
                {},
                function(err, user2) {
                    if(err) {
                        res.send(err);
                    }
                    User.findOne({_id: req.body._id}).populate('followers', 'loginid displayname photo_user photo_id').populate('following', 'loginid displayname photo_user photo_id').exec(function(err, user) {
                        if(err) {
                            res.send(err);
                        }
                        res.json(user);
                    });
                }
            )
        }
    );
});




module.exports = router;