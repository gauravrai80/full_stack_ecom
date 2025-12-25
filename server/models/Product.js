const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a product name'],
            trim: true,
            maxlength: [100, 'Product name cannot be more than 100 characters'],
        },
        description: {
            type: String,
            required: [true, 'Please provide a product description'],
            maxlength: [2000, 'Description cannot be more than 2000 characters'],
        },
        price: {
            type: Number,
            required: [true, 'Please provide a product price'],
            min: [0, 'Price cannot be negative'],
        },
        category: {
            type: String,
            required: [true, 'Please provide a product category'],
            enum: {
                values: ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports', 'Toys', 'Other'],
                message: 'Please select a valid category',
            },
        },
        stock: {
            type: Number,
            required: [true, 'Please provide stock quantity'],
            min: [0, 'Stock cannot be negative'],
            default: 0,
        },
        images: {
            type: [String],
            default: ['https://via.placeholder.com/400'],
        },
        rating: {
            type: Number,
            default: 0,
            min: [0, 'Rating cannot be less than 0'],
            max: [5, 'Rating cannot be more than 5'],
        },
        numReviews: {
            type: Number,
            default: 0,
            min: [0, 'Number of reviews cannot be negative'],
        },
    },
    {
        timestamps: true,
    }
);

// Index for search functionality
productSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema);
