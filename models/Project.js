const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  os: {
    type: String,
  },
  machineId: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);
