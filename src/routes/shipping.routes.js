const express = require('express');
const router = express.Router();
const shipping.Controller = require('../controllers/shipping.Controller');

router.get('/', shipping.Controller.getAll);
router.get('/:id', shipping.Controller.getById);
router.post('/', shipping.Controller.create);
router.put('/:id', shipping.Controller.update);
router.delete('/:id', shipping.Controller.delete);

module.exports = router;
