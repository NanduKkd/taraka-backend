const mongoose = require('mongoose');
const { PROVIDER } = require('../config/constants');

const MessageSchema = new mongoose.Schema({
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session',
    required: true,
  },
  role: {
    type: String,
    enum: ['USER', 'ASSISTANT'],
    required: true,
  },
  toolCalls: [{
    name: String,
    id: String,
    args: mongoose.Schema.Types.Mixed,
  }],
  toolResponses: [{
    id: String,
    response: mongoose.Schema.Types.Mixed,
  }],
  content: [{
    type: {
      type: String,
      enum: ['THINKING', 'TEXT', 'THINKING_SIGNATURE'],
      required: true,
    },
    content: String,
  }],
  usage: {
    cacheWrite: Number,
    cacheRead: Number,
    output: Number,
    thinking: Number,
  },
  model: String,
  provider: {
    type: String,
    enum: Object.values(PROVIDER),
  },
  promptId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Message', MessageSchema);
