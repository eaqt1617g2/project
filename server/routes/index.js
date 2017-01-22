var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'patata' });
});


router.get('/login', function(req, res, next) {
  res.render('loginForm.html', { message: req.flash('loginMessage') });
});

router.get('/signup', function(req, res) {
  res.render('registerForm.html', { message: req.flash('signupMessage') });
});

router.get('/profile', isLoggedIn, function(req, res) {
  res.render('homeScreen.html', { user: req.user });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/access');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/access#/register',
  failureFlash: true,
}));

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/access',
  failureFlash: true,
}));

router.post('/login2', passport.authenticate('local-login',{
    successRedirect: 'http://localhost:8100/#/tabsController/lastMinute',
    failureRedirect: '/login/access',
    failureFlash: true,

}));


// Facebook routes
router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/access',
}));

// Twitter routes
router.get('/auth/twitter', passport.authenticate('twitter'));

router.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/access',
}));

// Google routes
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/access',
}));

var Item = require('../models/item');
router.post('/additem', function(req, res) {
  console.log("entro para crear");
  console.log(req.body.author);
  Item.create({
    author: req.body.author,
    title: req.body.title,
    pic_id: req.body.pic_id
  }, function(err, item){
    if(err) {
      console.log("ERROR!!");
      res.send(err);
    }
    console.log("OK!");
    res.redirect('/views/itemView.html');
    /*Item.find(function(err, item) {
      if(err){
        res.send(err);
      }
      res.json(item);

    });*/
  });
});

// App login facebook

//Login with facebook in the mobile app
router.post('/auth/app/facebook', function(req, res){
  User.findOne({'provider_id': req.body.id }, function(err, checkUser) {
    if (checkUser) {
      res.send(checkUser)
    }
    else {
      console.log('Fuser');
      var Fuser = new User({
          provider_id : req.body.id,
          token : req.body.token,
          name : req.body.name,
          last_name : req.body.last_name,
          displayname : (req.body.name + ' ' + req.body.last_name),
          email : (req.body.emails[0].value || '').toLowerCase(),
          loginid	: Fuser.email.substr(0,Fuser.email.indexOf("@")),
          photo_user : req.body.photos[0].value
      });
      console.log(Fuser);
      Fuser.save(function(err,user) {
        if(err) throw err;
        res.send(user);
      });
    }
    if(err){
      res.status(400).send('Error!!')
    }
  });
});

//Login with Twitter in the movil App
router.post('/auth/app/twitter', function(req, res){
  User.findOne({provider_id: req.body.user_id}, function(err, existingUser) {
    if (existingUser) {
      res.send(existingUser);
    }
    else {
      // Al igual que antes, si el usuario ya existe lo devuelve
      var Tuser = new User({
        provider_id	         : req.body.user_id,
        name				 : req.body.screen_name
      });
      Tuser.save(function(err,user) {
        if(err) throw err;
        res.send(user);
      });
    }
    if(err){
      res.status(400).send('Error!t')
    }
  });
});

//Login with locale user for movile App
//Login silly for the mobile app without passport more efficient way
router.post('/auth/app/login', function(req, res){
  console.log(req.body);
  User.findOne({email: req.body.email}, function(err, existingUser) {
    if (existingUser) {
      res.send(existingUser)
    }
    if(err){
      res.status(400).send('Error!')
    }
  });

});



module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}