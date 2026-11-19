const express = require('express');
const router = express.Router();
const reconciliation.Controller = require('../controllers/reconciliation.Controller');

router.get('/', reconciliation.Controller.getAll);
router.get('/:id', reconciliation.Controller.getById);
router.post('/', reconciliation.Controller.create);
router.put('/:id', reconciliation.Controller.update);
router.delete('/:id', reconciliation.Controller.delete);

module.exports = router;
