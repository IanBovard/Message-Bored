/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const db = require('../../models');
const auth = require('../../utilities/authenticate.js');
let Users = db.users;
let Messages = db.messages;
let Topics = db.topics;

router.get('/', (req, res) => {
  return Topics.findAll({
    attributes: ['id','title', 'createdAt'],
    include: [{ model: Users , attributes: ['username', 'id']}]
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
        attributes: ['username', 'id']
      }
    },
    {
      model: Users,
      attributes: ['username', 'id']}]
    })
  .then(topicMessages => {
    res.json(topicMessages);
  });
});

router.post('/', auth.isAuthenticated, (req, res) => {
  let { title } = req.body;
  return Topics.create({
    title: title,
    created_by: req.user.id
  }).then(topic => {
    res.json( { success: true, message: topic });
  });
});

router.put('/:id', auth.isAuthenticated, (req,res) => {
  let path = req.params.id;
  let { title } = req.body;
  return Topics.findById(path)
  .then(topic => {
    console.log('THIS IS IT!!!',topic);
    topic.updateAttributes( {
      title: title
    }).then(topic => {
      res.json( { success: true, message: topic });
    }).catch(err => {
      console.log(err);
    });
  });
});
module.exports = router;
