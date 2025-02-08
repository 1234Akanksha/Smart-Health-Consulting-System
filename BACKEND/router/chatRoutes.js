const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

// Get messages
router.get('/messages', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

module.exports = router;