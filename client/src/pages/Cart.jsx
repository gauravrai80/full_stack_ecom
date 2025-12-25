import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const Cart = () => {
    const { items, totalAmount, removeItem, updateItemQuantity } = useCart();

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
                    <p className="text-gray-600 mb-8">Add some products to get started!</p>
                    <Link
                        to="/products"
                        className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
                    >
                        Browse Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => (
                            <div
                                key={item.product}
                                className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                                    <p className="text-primary-600 font-bold">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => updateItemQuantity(item.product, item.quantity - 1)}
                                        className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                                    >
                                        <FaMinus />
                                    </button>
                                    <span className="px-4 py-2 bg-gray-100 rounded-lg font-semibold">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => updateItemQuantity(item.product, item.quantity + 1)}
                                        className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                                    >
                                        <FaPlus />
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeItem(item.product)}
                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Summary</h2>
                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-semibold">${totalAmount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-semibold">Free</span>
                                </div>
                                <div className="border-t pt-2 flex justify-between">
                                    <span className="text-lg font-bold">Total</span>
                                    <span className="text-lg font-bold text-primary-600">
                                        ${totalAmount.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                            <Link
                                to="/checkout"
                                className="block w-full bg-primary-600 text-white text-center px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
