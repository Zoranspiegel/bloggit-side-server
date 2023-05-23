const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
  commentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  userName: {
    type: String,
    required: true
  },
  response: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Number,
    default: 1
  },
  responseLikes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Response = mongoose.model('Response', ResponseSchema);

module.exports = {
  Response,
  ResponseSchema
};
