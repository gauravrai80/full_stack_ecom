import React from 'react';
import { FaRocket, FaShieldAlt, FaTruck, FaHeadset } from 'react-icons/fa';

const About = () => {
    const features = [
        {
            icon: <FaRocket className="text-4xl text-cyan-400" />,
            title: 'Innovation First',
            description: 'We bring you the latest and most innovative tech products from around the world.',
        },
        {
            icon: <FaShieldAlt className="text-4xl text-cyan-400" />,
            title: 'Quality Guaranteed',
            description: 'Every product is carefully vetted to ensure it meets our high quality standards.',
        },
        {
            icon: <FaTruck className="text-4xl text-cyan-400" />,
            title: 'Fast Delivery',
            description: 'Quick and reliable shipping to get your products to you as soon as possible.',
        },
        {
            icon: <FaHeadset className="text-4xl text-cyan-400" />,
            title: '24/7 Support',
            description: 'Our dedicated support team is always here to help you with any questions.',
        },
    ];

    const stats = [
        { number: '50K+', label: 'Products' },
        { number: '100K+', label: 'Happy Customers' },
        { number: '4.9/5', label: 'Average Rating' },
        { number: '50+', label: 'Countries' },
    ];

    return (
        <div className="min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20">
                <div className="text-center animate-fadeIn">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/30 mb-6">
                        <span className="text-sm font-semibold text-cyan-400">About Us</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">
                            Redefining Tech Shopping
                        </span>
                    </h1>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Welcome to Gaurav Rai's premium e-commerce platform for cutting-edge electronics and tech gadgets.
                        We're passionate about bringing you the latest innovations in technology,
                        combined with exceptional service and unbeatable prices.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="card-glass text-center p-8 animate-slideUp"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-4xl font-bold text-cyan-400 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-400 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Story */}
            <section className="container mx-auto px-4 mb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="card-glass p-12">
                        <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                Founded in 2024, this platform emerged from a simple vision: to make premium
                                technology accessible to everyone. We noticed a gap in the market for a
                                platform that combines cutting-edge products with exceptional customer
                                service and competitive pricing.
                            </p>
                            <p>
                                Today, we're proud to serve over 100,000 customers across 50+ countries,
                                offering a carefully curated selection of 50,000+ products from the world's
                                leading tech brands. Our commitment to quality, innovation, and customer
                                satisfaction has made us a trusted name in the electronics industry.
                            </p>
                            <p>
                                We believe that technology should enhance lives, not complicate them.
                                That's why we focus on products that combine functionality with elegant
                                design, ensuring that every purchase brings value and joy to our customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="container mx-auto px-4 mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="gradient-text">Why Choose RaiStore?</span>
                    </h2>
                    <p className="text-gray-300">
                        We're committed to providing the best shopping experience
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="card text-center p-8 hover-lift animate-scaleIn"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20"></div>
                    <div className="glass-strong p-12 md:p-16 text-center relative z-10">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Ready to Experience the Future?
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join thousands of satisfied customers and discover why we are the
                            preferred choice for tech enthusiasts worldwide.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/products" className="btn-primary px-8 py-4 text-base">
                                Start Shopping
                            </a>
                            <a href="#" className="btn-secondary px-8 py-4 text-base">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
