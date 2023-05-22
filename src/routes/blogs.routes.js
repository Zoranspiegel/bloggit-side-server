const { Router } = require('express');
const ctr = require('../controllers');

const router = Router();

router.get('/all', ctr.getAllBlogs);

router.post('/create', ctr.postBlog);

module.exports = router;
