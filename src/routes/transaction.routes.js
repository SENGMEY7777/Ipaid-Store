const express = require('express');
const router = express.Router();
const transaction.Controller = require('../controllers/transaction.Controller');

router.get('/', transaction.Controller.getAll);
router.get('/:id', transaction.Controller.getById);
router.post('/', transaction.Controller.create);
router.put('/:id', transaction.Controller.update);
router.delete('/:id', transaction.Controller.delete);

module.exports = router;
