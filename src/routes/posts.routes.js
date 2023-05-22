const { Router } = require('express');
const ctr = require('../controllers');

const router = Router();

router.get('/all', ctr.getAllPosts);

router.get('/:id', ctr.getPostById);

router.post('/create', ctr.postArticle);

router.put('/like/:id', ctr.putLikeToPost);

module.exports = router;
