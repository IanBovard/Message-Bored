/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const db = require('../../models');
let Users = db.users;
let Messages = db.messages;
let Topics =db.topics;

router.get('/', (req, res) => {
  return Users.findAll().then((users) => {
    res.json(users);
  });
});

module.exports = router;