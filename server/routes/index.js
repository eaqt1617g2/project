var express = require('express');
var passport = require('passport');
var router = express.Router();

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

router.post('/login2', passport.authenticate('local-login',
    function (req, res) {
      // do something with req.user
      res.send(req.user? 200 : 401);

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



module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}