const express = require('express');
const router = express.Router();
const webhook.Controller = require('../controllers/webhook.Controller');

router.get('/', webhook.Controller.getAll);
router.get('/:id', webhook.Controller.getById);
router.post('/', webhook.Controller.create);
router.put('/:id', webhook.Controller.update);
router.delete('/:id', webhook.Controller.delete);

module.exports = router;
