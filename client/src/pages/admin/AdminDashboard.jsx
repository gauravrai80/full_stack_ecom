import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/slices/productsSlice';
import { fetchAllOrders } from '../../redux/slices/adminSlice';
import { FaBox, FaShoppingCart, FaDollarSign } from 'react-icons/fa';
import Loader from '../../components/Loader';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const { products, loading: productsLoading } = useSelector((state) => state.products);
    const { orders, loading: ordersLoading } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchAllOrders());
    }, [dispatch]);

    const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
    const totalProducts = products.length;
    const totalOrders = orders.length;

    if (productsLoading || ordersLoading) return <Loader />;

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-primary-100 rounded-lg">
                                <FaDollarSign className="text-3xl text-primary-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600">Total Revenue</p>
                                <p className="text-2xl font-bold text-gray-900">${totalRevenue.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <FaBox className="text-3xl text-green-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600">Total Products</p>
                                <p className="text-2xl font-bold text-gray-900">{totalProducts}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <FaShoppingCart className="text-3xl text-blue-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm text-gray-600">Total Orders</p>
                                <p className="text-2xl font-bold text-gray-900">{totalOrders}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link
                        to="/admin/products"
                        className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition text-center"
                    >
                        <FaBox className="text-5xl text-primary-600 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Products</h2>
                        <p className="text-gray-600">Add, edit, or delete products</p>
                    </Link>

                    <Link
                        to="/admin/orders"
                        className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition text-center"
                    >
                        <FaShoppingCart className="text-5xl text-primary-600 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Manage Orders</h2>
                        <p className="text-gray-600">View and update order statuses</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
