/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const db = require('../../models');
let Users = db.users;

router.get('/', (req, res) => {
  return Users.findAll().then((users) => {
    console.log(users);
  });
});

module.exports = router;