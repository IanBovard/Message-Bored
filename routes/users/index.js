/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const db = require('../../models');
let Users = db.users;
let Messages = db.messages;
let Topics =db.topics;

router.get('/', (req, res) => {
  return Users.findAll({ attributes: ['id', 'username']}).then((users) => {
    res.json(users);
  });
});

router.get('/:id', (req, res) => {
  let pathId = req.params.id;
  return Users.findById(pathId, {
    attributes: ['id', 'username'],
    include: [{ model: Messages, attributes: ['body', 'createdAt'],
    include: [{ model: Topics, attributes: ['title']
  }]}]
})
  .then(userMessages => {
    res.json(userMessages.dataValues);
  });
});
module.exports = router;