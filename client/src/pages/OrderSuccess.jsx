import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const OrderSuccess = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
            <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 text-center animate-slide-up">
                <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Successful!</h1>
                <p className="text-gray-600 mb-8">
                    Thank you for your purchase. Your order has been placed successfully.
                </p>
                <div className="space-y-4">
                    <Link
                        to="/orders"
                        className="block w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
                    >
                        View My Orders
                    </Link>
                    <Link
                        to="/products"
                        className="block w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;
