const express = require('express');
const router = express.Router();
const staff.Controller = require('../controllers/staff.Controller');

router.get('/', staff.Controller.getAll);
router.get('/:id', staff.Controller.getById);
router.post('/', staff.Controller.create);
router.put('/:id', staff.Controller.update);
router.delete('/:id', staff.Controller.delete);

module.exports = router;
