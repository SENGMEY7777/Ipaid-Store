const express = require('express');
const router = express.Router();
const store.Controller = require('../controllers/store.Controller');

router.get('/', store.Controller.getAll);
router.get('/:id', store.Controller.getById);
router.post('/', store.Controller.create);
router.put('/:id', store.Controller.update);
router.delete('/:id', store.Controller.delete);

module.exports = router;
