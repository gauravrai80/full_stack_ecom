import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingBag, FaBox, FaUsers } from 'react-icons/fa';

const Home = () => {
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 animate-fade-in">
                        Welcome to <span className="text-primary-600">ShopHub</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Discover amazing products at unbeatable prices. Your one-stop shop for everything you need.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link
                            to="/products"
                            className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Shop Now
                        </Link>
                        {!user && (
                            <Link
                                to="/register"
                                className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition font-semibold text-lg"
                            >
                                Sign Up
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
                        <FaShoppingBag className="text-5xl text-primary-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Wide Selection</h3>
                        <p className="text-gray-600">
                            Browse thousands of products across multiple categories
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
                        <FaBox className="text-5xl text-primary-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Fast Shipping</h3>
                        <p className="text-gray-600">
                            Get your orders delivered quickly and safely to your doorstep
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition transform hover:-translate-y-2">
                        <FaUsers className="text-5xl text-primary-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                        <p className="text-gray-600">
                            Our customer service team is always here to help you
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Ready to Start Shopping?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8">
                        Join thousands of satisfied customers today
                    </p>
                    <Link
                        to="/products"
                        className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg shadow-lg"
                    >
                        Browse Products
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
