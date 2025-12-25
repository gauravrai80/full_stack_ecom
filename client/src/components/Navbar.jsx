import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { FaShoppingCart, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { totalItems } = useSelector((state) => state.cart);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-primary-600">
                        ShopHub
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-6">
                        <Link
                            to="/products"
                            className="text-gray-700 hover:text-primary-600 transition"
                        >
                            Products
                        </Link>

                        {user && user.role === 'admin' && (
                            <Link
                                to="/admin/dashboard"
                                className="text-gray-700 hover:text-primary-600 transition"
                            >
                                Admin
                            </Link>
                        )}

                        {/* Cart */}
                        <Link to="/cart" className="relative">
                            <FaShoppingCart className="text-2xl text-gray-700 hover:text-primary-600 transition" />
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>

                        {/* User Menu */}
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <Link
                                    to="/orders"
                                    className="text-gray-700 hover:text-primary-600 transition flex items-center"
                                >
                                    <FaUser className="mr-1" />
                                    {user.name}
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="text-gray-700 hover:text-red-600 transition"
                                >
                                    <FaSignOutAlt className="text-xl" />
                                </button>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
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
