/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const db = require('../../models');
const passport = require('passport');
const saltRounds = 10;
const bcrypt = require('bcrypt');

let Users = db.users;

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ success: true, message: req.user });
});

router.post('/register', (req, res) => {
  let { username, password } = req.body;
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      Users.create({
        username: username,
        password: hash
      }).then(user => {
        req.login(user, (err) => {
          if (err) {return next(err);}
          res.json({ success: true, message: req.user });
        });
      })
      .catch(err => {
        res.json({ success: false, message: 'Failed to register new account' });
      });
    });
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.json({ success: true, message: 'You logged out'});
});

module.exports = router;