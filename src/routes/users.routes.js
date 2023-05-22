const { Router } = require('express');
const ctr = require('../controllers');

const router = Router();

router.get('/all', ctr.getAllUsers);

router.get('/:id', ctr.getUserById);

router.post('/create', ctr.postUser);

module.exports = router;
