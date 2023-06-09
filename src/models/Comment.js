const mongoose = require('mongoose');
const { ResponseSchema } = require('./Response.js');

const CommentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  userName: {
    type: String,
    required: true
  },
  comment: {
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
  commentLikes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  responses: [ResponseSchema]
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = {
  Comment,
  CommentSchema
};
