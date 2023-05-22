const { Router } = require('express');
const ctr = require('../controllers');

const router = Router();

router.get('/:id', ctr.getComments);

router.post('/create', ctr.postComment);

router.put('/like/:id', ctr.putLikeComment);

module.exports = router;
