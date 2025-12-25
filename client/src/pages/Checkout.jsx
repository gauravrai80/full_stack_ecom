import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCart } from '../hooks/useCart';
import { createOrder } from '../redux/slices/ordersSlice';
import api from '../services/api';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { items, totalAmount, clearAllItems } = useCart();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [shippingAddress, setShippingAddress] = useState({
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });

    const handleAddressChange = (e) => {
        setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setLoading(true);
        setError(null);

        try {
            // Create payment intent
            const { data } = await api.post('/api/payments/create-payment-intent', {
                amount: totalAmount,
            });

            // Confirm payment
            const result = await stripe.confirmCardPayment(data.clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (result.error) {
                setError(result.error.message);
                setLoading(false);
            } else {
                // Create order
                const orderData = {
                    items: items.map((item) => ({
                        product: item.product,
                        name: item.name,
                        quantity: item.quantity,
                        price: item.price,
                        image: item.image,
                    })),
                    shippingAddress,
                    totalAmount,
                    paymentIntentId: data.paymentIntentId,
                };

                await dispatch(createOrder(orderData));
                clearAllItems();
                navigate('/order-success');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Payment failed');
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            )}

            {/* Shipping Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Street Address
                        </label>
                        <input
                            type="text"
                            name="address"
                            required
                            value={shippingAddress.address}
                            onChange={handleAddressChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                        <input
                            type="text"
                            name="city"
                            required
                            value={shippingAddress.city}
                            onChange={handleAddressChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Postal Code
                        </label>
                        <input
                            type="text"
                            name="postalCode"
                            required
                            value={shippingAddress.postalCode}
                            onChange={handleAddressChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                        <input
                            type="text"
                            name="country"
                            required
                            value={shippingAddress.country}
                            onChange={handleAddressChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        />
                    </div>
                </div>
            </div>

            {/* Payment Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                <div className="p-4 border border-gray-300 rounded-lg">
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-2">
                    {items.map((item) => (
                        <div key={item.product} className="flex justify-between">
                            <span className="text-gray-600">
                                {item.name} x {item.quantity}
                            </span>
                            <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="border-t pt-2 flex justify-between">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-lg font-bold text-primary-600">
                            ${totalAmount.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                disabled={!stripe || loading}
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold disabled:opacity-50"
            >
                {loading ? 'Processing...' : `Pay $${totalAmount.toFixed(2)}`}
            </button>
        </form>
    );
};

const Checkout = () => {
    const { items } = useCart();

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
                    <p className="text-gray-600">Add some products before checking out!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h1>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Checkout;
