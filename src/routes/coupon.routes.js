const express = require('express');
const router = express.Router();
const coupon.Controller = require('../controllers/coupon.Controller');

router.get('/', coupon.Controller.getAll);
router.get('/:id', coupon.Controller.getById);
router.post('/', coupon.Controller.create);
router.put('/:id', coupon.Controller.update);
router.delete('/:id', coupon.Controller.delete);

module.exports = router;
