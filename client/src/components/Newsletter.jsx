import React, { useState } from 'react';
import { FaEnvelope, FaArrowRight, FaStar } from 'react-icons/fa';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/30 animate-fadeIn">
                        <FaStar className="text-cyan-400 text-sm" />
                        <span className="text-sm font-semibold text-cyan-400">Limited Time Offer</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold">
                        <span className="gradient-text">
                            Get 20% Off Your First Order
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Subscribe to our newsletter and receive exclusive deals, new product launches, and tech insights delivered to your inbox.
                    </p>

                    {/* Email Form */}
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative">
                                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full pl-12 pr-4 py-4 rounded-lg glass-strong text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn-primary px-8 py-4 whitespace-nowrap group"
                            >
                                Subscribe
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </form>

                    {/* Trust Badge */}
                    <p className="text-sm text-gray-400">
                        🔒 We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
