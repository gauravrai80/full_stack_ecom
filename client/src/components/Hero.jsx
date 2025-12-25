import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay, FaStar } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>

            {/* Animated background circles */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-8 animate-slideInLeft">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/30 animate-fadeIn">
                            <FaStar className="text-cyan-400 text-sm" />
                            <span className="text-sm font-semibold text-cyan-400">New Collection 2024</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                            <span className="gradient-text">
                                Experience the Future of Tech
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                            Discover premium electronics and cutting-edge gadgets that redefine your digital lifestyle. Quality meets innovation.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/products"
                                className="btn-primary text-base px-8 py-4 group"
                            >
                                Shop Now
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button className="btn-secondary text-base px-8 py-4 group">
                                <FaPlay className="text-sm" />
                                Watch Video
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-cyan-400">50K+</div>
                                <div className="text-sm text-gray-400">Products</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-cyan-400">100K+</div>
                                <div className="text-sm text-gray-400">Customers</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-cyan-400">4.9</div>
                                <div className="text-sm text-gray-400">Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Floating Product Images */}
                    <div className="relative h-[500px] lg:h-[600px] animate-slideInRight">
                        <div className="absolute top-0 left-0 w-full h-full">
                            {/* Main Product - Center */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float">
                                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl glass-strong p-6 hover-scale">
                                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                                        <div className="text-6xl">🎧</div>
                                    </div>
                                </div>
                            </div>

                            {/* Secondary Product - Top Right */}
                            <div className="absolute top-10 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
                                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl glass p-4 hover-scale">
                                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl flex items-center justify-center">
                                        <div className="text-4xl">⌚</div>
                                    </div>
                                </div>
                            </div>

                            {/* Tertiary Product - Bottom Left */}
                            <div className="absolute bottom-10 left-10 animate-float" style={{ animationDelay: '1s' }}>
                                <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl glass p-4 hover-scale">
                                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
                                        <div className="text-4xl">🎵</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-cyan-400/50 flex justify-center p-2">
                    <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
