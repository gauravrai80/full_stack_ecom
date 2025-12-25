const express = require('express');
const router = express.Router();
const {
    createOrder,
    getMyOrders,
    getOrder,
    getAllOrders,
    updateOrderStatus,
} = require('../controllers/orderController');
const { protect, admin } = require('../middlewares/authMiddleware');
const {
    orderValidation,
    validate,
} = require('../middlewares/validationMiddleware');

// User routes
router.post('/', protect, orderValidation, validate, createOrder);
router.get('/my-orders', protect, getMyOrders);
router.get('/:id', protect, getOrder);

// Admin routes
router.get('/admin/orders', protect, admin, getAllOrders);
router.put('/admin/orders/:id', protect, admin, updateOrderStatus);

module.exports = router;
