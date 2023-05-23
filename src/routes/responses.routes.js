const { Router } = require('express');
const ctr = require('../controllers');

const router = Router();

router.get('/:postId/:commentId', ctr.getResponses);

router.post('/create/:postId', ctr.postResponse);

router.put('/like/:postId/:commentId', ctr.putLikeResponse);

module.exports = router;
