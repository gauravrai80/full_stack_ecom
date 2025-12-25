import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { FaShoppingCart, FaUser, FaSignOutAlt, FaSearch, FaStar } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { user } = useSelector((state) => state.auth);
    const { totalItems } = useSelector((state) => state.cart);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed top - 0 left - 0 right - 0 z - 50 transition - all duration - 300 ${scrolled ? 'glass-strong shadow-xl' : 'glass'
                } `}
        >
            <div className="container mx-auto">
                <div className="flex justify-between items-center h-20 px-4">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-3 group"
                    >
                        <div className="relative">
                            <img
                                src={logo}
                                alt="Gaurav Rai Logo"
                                className="w-12 h-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <span className="text-2xl font-bold text-white">
                            Gaurav<span className="text-cyan-400">Rai</span>
                        </span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`relative text - sm font - medium transition - colors duration - 300 ${isActive('/')
                                    ? 'text-cyan-400'
                                    : 'text-gray-300 hover:text-white'
                                } `}
                        >
                            Home
                            {isActive('/') && (
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                            )}
                        </Link>
                        <Link
                            to="/products"
                            className={`relative text - sm font - medium transition - colors duration - 300 ${isActive('/products')
                                    ? 'text-cyan-400'
                                    : 'text-gray-300 hover:text-white'
                                } `}
                        >
                            Products
                            {isActive('/products') && (
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                            )}
                        </Link>
                        <Link
                            to="/categories"
                            className={`relative text - sm font - medium transition - colors duration - 300 ${isActive('/categories')
                                    ? 'text-cyan-400'
                                    : 'text-gray-300 hover:text-white'
                                } `}
                        >
                            Categories
                            {isActive('/categories') && (
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                            )}
                        </Link>
                        <Link
                            to="/about"
                            className={`relative text - sm font - medium transition - colors duration - 300 ${isActive('/about')
                                    ? 'text-cyan-400'
                                    : 'text-gray-300 hover:text-white'
                                } `}
                        >
                            About
                            {isActive('/about') && (
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                            )}
                        </Link>

                        {user && user.role === 'admin' && (
                            <Link
                                to="/admin/dashboard"
                                className={`relative text - sm font - medium transition - colors duration - 300 ${isActive('/admin/dashboard')
                                        ? 'text-cyan-400'
                                        : 'text-gray-300 hover:text-white'
                                    } `}
                            >
                                Admin
                                {isActive('/admin/dashboard') && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
                                )}
                            </Link>
                        )}
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-6">
                        {/* Search Icon */}
                        <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                            <FaSearch className="text-xl" />
                        </button>

                        {/* Cart */}
                        <Link to="/cart" className="relative group">
                            <FaShoppingCart className="text-2xl text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                                    {totalItems}
                                </span>
                            )}
                        </Link>

                        {/* User Menu */}
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <Link
                                    to="/orders"
                                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                                        <FaUser className="text-white text-sm" />
                                    </div>
                                    <span className="hidden lg:block text-sm font-medium">{user.name}</span>
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                                    title="Logout"
                                >
                                    <FaSignOutAlt className="text-xl" />
                                </button>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="btn-primary text-sm"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

