const express = require('express');
const router = express.Router();
const { placeOrder, getOrder } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, placeOrder);
router.get('/:id', getOrder);

module.exports = router;
