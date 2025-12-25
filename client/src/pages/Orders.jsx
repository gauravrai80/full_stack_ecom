import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyOrders } from '../redux/slices/ordersSlice';
import Loader from '../components/Loader';

const Orders = () => {
    const dispatch = useDispatch();
    const { orders, loading } = useSelector((state) => state.orders);

    useEffect(() => {
        dispatch(fetchMyOrders());
    }, [dispatch]);

    if (loading) return <Loader />;

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">My Orders</h1>

                {orders.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg mb-4">You haven't placed any orders yet</p>
                        <Link
                            to="/products"
                            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
                        >
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div key={order._id} className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-sm text-gray-600">
                                            Order ID: <span className="font-mono">{order._id}</span>
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Date: {new Date(order.createdAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-primary-600">
                                            ${order.totalAmount.toFixed(2)}
                                        </p>
                                        <span
                                            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${order.orderStatus === 'delivered'
                                                    ? 'bg-green-100 text-green-800'
                                                    : order.orderStatus === 'shipped'
                                                        ? 'bg-blue-100 text-blue-800'
                                                        : order.orderStatus === 'paid'
                                                            ? 'bg-yellow-100 text-yellow-800'
                                                            : 'bg-gray-100 text-gray-800'
                                                }`}
                                        >
                                            {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
                                        </span>
                                    </div>
                                </div>

                                <div className="border-t pt-4">
                                    <h3 className="font-semibold mb-2">Items:</h3>
                                    <div className="space-y-2">
                                        {order.items.map((item, index) => (
                                            <div key={index} className="flex justify-between text-sm">
                                                <span className="text-gray-700">
                                                    {item.name} x {item.quantity}
                                                </span>
                                                <span className="font-semibold">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <Link
                                        to={`/orders/${order._id}`}
                                        className="text-primary-600 hover:text-primary-700 font-semibold"
                                    >
                                        View Details →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;
