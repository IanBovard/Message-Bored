/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const db = require('../../models');
let Users = db.users;
let Messages = db.messages;
let Topics =db.topics;

router.get('/', (req, res) => {
  return Topics.findAll({
    attributes: ['id','title', 'createdAt'],
    include: [{ model: Users , attributes: ['username']}]
  })
  .then(topics => {
    res.json(topics);
  });
});

router.get('/:id', (req, res) => {
  let pathId = req.params.id;
  return Topics.findById(pathId, {
    attributes: ['id', 'title', 'createdAt'],
    include: [{
      model: Messages,
      attributes: ['body', 'createdAt'],
      include: {
        model: Users,
        attributes: ['username']
      }
    },
    {
      model: Users,
      attributes: ['username']}]
    })
  .then(topicMessages => {
    console.log(topicMessages);
    res.json(topicMessages);
  });
});
module.exports = router;