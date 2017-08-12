/*jshint esversion:6*/
const express = require('express');
const router = express.Router();
const db = require('../../models');
const auth = require('../../utilities/authenticate.js');
let Users = db.users;
let Messages = db.messages;
let Topics =db.topics;

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
  let { body, author_id, topic_id } = req.body;
  console.log(req.body);
  return Users.findOne( { where: { username: author_id }, attributes: ['id']}).then(userId =>{
    return Messages.create({
      body: body,
      author_id: userId.dataValues.id,
      topic_id: topic_id
    }).then(topic => {
      res.json( { success: true, message: topic });
    });
  });
});
module.exports = router;