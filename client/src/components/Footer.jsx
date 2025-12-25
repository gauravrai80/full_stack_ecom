import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaStar } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="relative mt-20 glass-strong border-t border-white/10">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* About */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <img
                                src={logo}
                                alt="Gaurav Rai Logo"
                                className="w-12 h-12 object-contain"
                            />
                            <span className="text-2xl font-bold text-white">
                                Gaurav<span className="text-cyan-400">Rai</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your premium destination for cutting-edge electronics and tech gadgets. Quality meets innovation.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                <FaGithub className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                <FaTwitter className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                <FaLinkedin className="text-xl" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                                <FaInstagram className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/categories" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Customer Service</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/cart" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                                    Shopping Cart
                                </Link>
                            </li>
                            <li>
                                <Link to="/orders" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                                    Order Tracking
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                                    Shipping Info
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm">
                                    Returns & Refunds
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Stay Updated</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe to get special offers and updates.
                        </p>
                        <div className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 rounded-lg glass-strong text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                            />
                            <button className="btn-primary text-sm py-2">
                                <FaStar className="text-xs" />
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © 2024 Gaurav Rai. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

