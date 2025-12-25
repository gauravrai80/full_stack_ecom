import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeadphones, FaClock, FaLaptop, FaMobile, FaCamera, FaGamepad } from 'react-icons/fa';

const Categories = () => {
    const categories = [
        {
            name: 'Audio',
            icon: <FaHeadphones className="text-6xl" />,
            description: 'Premium headphones, speakers & audio equipment',
            productCount: '250+ Products',
            gradient: 'from-cyan-600/20 to-blue-600/20',
            hoverGradient: 'group-hover:from-cyan-600/30 group-hover:to-blue-600/30',
            link: '/products?category=audio',
        },
        {
            name: 'Wearables',
            icon: <FaClock className="text-6xl" />,
            description: 'Smartwatches, fitness trackers & wearable tech',
            productCount: '180+ Products',
            gradient: 'from-purple-600/20 to-pink-600/20',
            hoverGradient: 'group-hover:from-purple-600/30 group-hover:to-pink-600/30',
            link: '/products?category=wearables',
        },
        {
            name: 'Computers',
            icon: <FaLaptop className="text-6xl" />,
            description: 'Laptops, desktops & computer accessories',
            productCount: '320+ Products',
            gradient: 'from-blue-600/20 to-cyan-600/20',
            hoverGradient: 'group-hover:from-blue-600/30 group-hover:to-cyan-600/30',
            link: '/products?category=computers',
        },
        {
            name: 'Mobile',
            icon: <FaMobile className="text-6xl" />,
            description: 'Smartphones, tablets & mobile accessories',
            productCount: '400+ Products',
            gradient: 'from-green-600/20 to-emerald-600/20',
            hoverGradient: 'group-hover:from-green-600/30 group-hover:to-emerald-600/30',
            link: '/products?category=mobile',
        },
        {
            name: 'Cameras',
            icon: <FaCamera className="text-6xl" />,
            description: 'Digital cameras, lenses & photography gear',
            productCount: '150+ Products',
            gradient: 'from-orange-600/20 to-red-600/20',
            hoverGradient: 'group-hover:from-orange-600/30 group-hover:to-red-600/30',
            link: '/products?category=cameras',
        },
        {
            name: 'Gaming',
            icon: <FaGamepad className="text-6xl" />,
            description: 'Gaming consoles, accessories & peripherals',
            productCount: '200+ Products',
            gradient: 'from-violet-600/20 to-purple-600/20',
            hoverGradient: 'group-hover:from-violet-600/30 group-hover:to-purple-600/30',
            link: '/products?category=gaming',
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16 animate-fadeIn">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/30 mb-6">
                        <span className="text-sm font-semibold text-cyan-400">Browse Collections</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">Product Categories</span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Explore our diverse range of premium electronics and tech products across multiple categories
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            to={category.link}
                            className="group relative h-96 rounded-2xl overflow-hidden hover-lift animate-scaleIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} ${category.hoverGradient} transition-all duration-300`}></div>

                            {/* Content */}
                            <div className="absolute inset-0 glass-strong flex flex-col items-center justify-center text-center p-8">
                                {/* Icon */}
                                <div className="text-cyan-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>

                                {/* Category Name */}
                                <h3 className="text-3xl font-bold text-white mb-3">
                                    {category.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 mb-4 max-w-xs">
                                    {category.description}
                                </p>

                                {/* Product Count */}
                                <div className="badge mb-6">
                                    {category.productCount}
                                </div>

                                {/* CTA */}
                                <span className="text-cyan-400 font-semibold group-hover:underline flex items-center gap-2">
                                    Explore Collection
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <div className="glass-strong rounded-2xl p-12 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Can't find what you're looking for?
                        </h2>
                        <p className="text-gray-300 mb-8">
                            Browse all our products or contact our support team for assistance
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/products" className="btn-primary px-8 py-4">
                                View All Products
                            </Link>
                            <a href="#" className="btn-secondary px-8 py-4">
                                Contact Support
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
