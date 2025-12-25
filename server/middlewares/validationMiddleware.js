const { body, validationResult } = require('express-validator');

// Validation middleware to check for errors
exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }
    next();
};

// Registration validation rules
exports.registerValidation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ max: 50 })
        .withMessage('Name cannot exceed 50 characters'),
    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please provide a valid email')
        .normalizeEmail(),
    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters'),
];

// Login validation rules
exports.loginValidation = [
    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please provide a valid email')
        .normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required'),
];

// Product validation rules
exports.productValidation = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Product name is required')
        .isLength({ max: 100 })
        .withMessage('Product name cannot exceed 100 characters'),
    body('description')
        .trim()
        .notEmpty()
        .withMessage('Product description is required')
        .isLength({ max: 2000 })
        .withMessage('Description cannot exceed 2000 characters'),
    body('price')
        .notEmpty()
        .withMessage('Price is required')
        .isFloat({ min: 0 })
        .withMessage('Price must be a positive number'),
    body('category')
        .notEmpty()
        .withMessage('Category is required')
        .isIn(['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports', 'Toys', 'Other'])
        .withMessage('Please select a valid category'),
    body('stock')
        .notEmpty()
        .withMessage('Stock quantity is required')
        .isInt({ min: 0 })
        .withMessage('Stock must be a non-negative integer'),
];

// Order validation rules
exports.orderValidation = [
    body('items')
        .isArray({ min: 1 })
        .withMessage('Order must contain at least one item'),
    body('shippingAddress.address')
        .trim()
        .notEmpty()
        .withMessage('Shipping address is required'),
    body('shippingAddress.city')
        .trim()
        .notEmpty()
        .withMessage('City is required'),
    body('shippingAddress.postalCode')
        .trim()
        .notEmpty()
        .withMessage('Postal code is required'),
    body('shippingAddress.country')
        .trim()
        .notEmpty()
        .withMessage('Country is required'),
    body('totalAmount')
        .notEmpty()
        .withMessage('Total amount is required')
        .isFloat({ min: 0 })
        .withMessage('Total amount must be a positive number'),
];
