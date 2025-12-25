const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

// Sample products data
const sampleProducts = [
    // Electronics
    {
        name: 'Wireless Bluetooth Headphones',
        description: 'Premium noise-cancelling wireless headphones with 30-hour battery life. Features advanced Bluetooth 5.0 technology, comfortable over-ear design, and crystal-clear sound quality.',
        price: 79.99,
        category: 'Electronics',
        stock: 50,
        images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'],
        rating: 4.5,
        numReviews: 128
    },
    {
        name: 'Smart Watch Pro',
        description: 'Advanced fitness tracker with heart rate monitor, GPS, and sleep tracking. Water-resistant design with 7-day battery life and customizable watch faces.',
        price: 199.99,
        category: 'Electronics',
        stock: 35,
        images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400'],
        rating: 4.7,
        numReviews: 256
    },
    {
        name: 'Portable Bluetooth Speaker',
        description: '360-degree sound portable speaker with 12-hour playtime. IPX7 waterproof rating, perfect for outdoor adventures and pool parties.',
        price: 49.99,
        category: 'Electronics',
        stock: 75,
        images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400'],
        rating: 4.3,
        numReviews: 89
    },
    {
        name: '4K Webcam HD',
        description: 'Professional 4K webcam with auto-focus and built-in microphone. Perfect for streaming, video calls, and content creation.',
        price: 89.99,
        category: 'Electronics',
        stock: 42,
        images: ['https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400'],
        rating: 4.6,
        numReviews: 145
    },

    // Clothing
    {
        name: 'Classic Denim Jacket',
        description: 'Timeless denim jacket made from premium cotton. Features button closure, multiple pockets, and a comfortable regular fit. Perfect for casual everyday wear.',
        price: 59.99,
        category: 'Clothing',
        stock: 60,
        images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400'],
        rating: 4.4,
        numReviews: 92
    },
    {
        name: 'Cotton T-Shirt Pack (3-Pack)',
        description: 'Set of 3 premium cotton t-shirts in assorted colors. Soft, breathable fabric with reinforced stitching. Available in multiple sizes.',
        price: 29.99,
        category: 'Clothing',
        stock: 120,
        images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400'],
        rating: 4.2,
        numReviews: 203
    },
    {
        name: 'Running Sneakers',
        description: 'Lightweight running shoes with cushioned sole and breathable mesh upper. Designed for comfort and performance during long runs.',
        price: 89.99,
        category: 'Clothing',
        stock: 45,
        images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400'],
        rating: 4.8,
        numReviews: 312
    },

    // Books
    {
        name: 'The Art of Programming',
        description: 'Comprehensive guide to modern programming practices. Covers algorithms, data structures, and best practices for software development.',
        price: 39.99,
        category: 'Books',
        stock: 85,
        images: ['https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400'],
        rating: 4.9,
        numReviews: 421
    },
    {
        name: 'Mindfulness and Meditation',
        description: 'A practical guide to mindfulness and meditation techniques. Learn to reduce stress and improve mental clarity through daily practice.',
        price: 24.99,
        category: 'Books',
        stock: 95,
        images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400'],
        rating: 4.6,
        numReviews: 178
    },

    // Home & Garden
    {
        name: 'Ceramic Plant Pot Set',
        description: 'Set of 3 modern ceramic plant pots with drainage holes. Includes bamboo saucers. Perfect for indoor plants and succulents.',
        price: 34.99,
        category: 'Home & Garden',
        stock: 68,
        images: ['https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400'],
        rating: 4.5,
        numReviews: 134
    },
    {
        name: 'LED Desk Lamp',
        description: 'Adjustable LED desk lamp with touch control and 3 brightness levels. Energy-efficient with modern minimalist design.',
        price: 44.99,
        category: 'Home & Garden',
        stock: 52,
        images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400'],
        rating: 4.4,
        numReviews: 97
    },
    {
        name: 'Aromatherapy Diffuser',
        description: 'Ultrasonic essential oil diffuser with 7 LED color options. Whisper-quiet operation with auto shut-off feature.',
        price: 29.99,
        category: 'Home & Garden',
        stock: 78,
        images: ['https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400'],
        rating: 4.7,
        numReviews: 215
    },

    // Sports
    {
        name: 'Yoga Mat Premium',
        description: 'Extra-thick yoga mat with non-slip surface. Includes carrying strap. Perfect for yoga, pilates, and floor exercises.',
        price: 39.99,
        category: 'Sports',
        stock: 90,
        images: ['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400'],
        rating: 4.6,
        numReviews: 187
    },
    {
        name: 'Resistance Bands Set',
        description: 'Set of 5 resistance bands with different resistance levels. Includes door anchor, handles, and carrying bag.',
        price: 24.99,
        category: 'Sports',
        stock: 110,
        images: ['https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400'],
        rating: 4.5,
        numReviews: 156
    },

    // Toys
    {
        name: 'Building Blocks Set (500 Pieces)',
        description: 'Creative building blocks set with 500 colorful pieces. Compatible with major brands. Encourages creativity and problem-solving.',
        price: 34.99,
        category: 'Toys',
        stock: 65,
        images: ['https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400'],
        rating: 4.8,
        numReviews: 289
    },
    {
        name: 'Educational Science Kit',
        description: 'STEM learning kit with 30+ experiments. Includes all materials and detailed instruction manual. Perfect for ages 8-12.',
        price: 49.99,
        category: 'Toys',
        stock: 48,
        images: ['https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=400'],
        rating: 4.9,
        numReviews: 342
    }
];

// Connect to MongoDB and seed products
const seedProducts = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected...');

        // Clear existing products (optional - comment out if you want to keep existing products)
        await Product.deleteMany({});
        console.log('Existing products cleared...');

        // Insert sample products
        const products = await Product.insertMany(sampleProducts);
        console.log(`${products.length} products added successfully!`);

        console.log('\n✅ Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedProducts();
