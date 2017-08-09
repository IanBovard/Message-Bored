/* jshint esversion:6*/
const express = require('express');
const router = express.Router();

const usersRoutes = require('./users');
const topicsRoutes = require('./topics');
const messagesRoutes = require('./messages');

router.use('/users', usersRoutes);
router.use('/topics', topicsRoutes);
router.use('/messages', messagesRoutes);

module.exports = router;