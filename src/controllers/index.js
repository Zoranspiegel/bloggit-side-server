const postUser = require('./postUser.js');
const postBlog = require('./postBlog.js');
const postArticle = require('./postArticle.js');
const getAllPosts = require('./getAllPosts.js');
const getAllUsers = require('./getAllUsers.js');
const getAllBlogs = require('./getAllBlogs.js');
const putLikeToPost = require('./putLikeToPost.js');
const getPostById = require('./getPostById.js');
const postComment = require('./postComment.js');
const getComments = require('./getComments.js');
const putLikeComment = require('./putLikeComment.js');
const getUserById = require('./getUserById.js');
const getResponses = require('./getResponses.js');
const postResponse = require('./postResponse.js');
const putLikeResponse = require('./putLikeResponse.js');

module.exports = {
  postUser,
  postBlog,
  postArticle,
  getAllPosts,
  getAllUsers,
  getAllBlogs,
  putLikeToPost,
  getPostById,
  postComment,
  getComments,
  putLikeComment,
  getUserById,
  getResponses,
  postResponse,
  putLikeResponse
};
