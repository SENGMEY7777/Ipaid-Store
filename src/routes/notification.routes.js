const express = require('express');
const router = express.Router();
const notification.Controller = require('../controllers/notification.Controller');

router.get('/', notification.Controller.getAll);
router.get('/:id', notification.Controller.getById);
router.post('/', notification.Controller.create);
router.put('/:id', notification.Controller.update);
router.delete('/:id', notification.Controller.delete);

module.exports = router;
