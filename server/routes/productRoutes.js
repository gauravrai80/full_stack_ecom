const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');
const { protect, admin } = require('../middlewares/authMiddleware');
const {
    productValidation,
    validate,
} = require('../middlewares/validationMiddleware');

// Public routes
router.get('/', getProducts);
router.get('/:id', getProduct);

// Admin routes
router.post(
    '/admin/products',
    protect,
    admin,
    productValidation,
    validate,
    createProduct
);
router.put(
    '/admin/products/:id',
    protect,
    admin,
    productValidation,
    validate,
    updateProduct
);
router.delete('/admin/products/:id', protect, admin, deleteProduct);

module.exports = router;
