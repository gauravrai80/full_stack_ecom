import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productsSlice';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Newsletter from '../components/Newsletter';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';

const Home = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // Get featured products (first 8 products)
    const featuredProducts = products.slice(0, 8);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Hero />

            {/* Stats Bar */}
            <StatsBar />

            {/* Featured Collection */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fadeIn">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/30 mb-6">
                            <span className="text-sm font-semibold text-cyan-400">Featured Collection</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">Trending Products</span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Discover our handpicked selection of premium electronics and gadgets
                        </p>
                    </div>

                    {/* Products Grid */}
                    {loading ? (
                        <div className="flex justify-center py-20">
                            <Loader />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {featuredProducts.map((product, index) => (
                                <div
                                    key={product._id}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* View All Button */}
                    {!loading && featuredProducts.length > 0 && (
                        <div className="text-center mt-12">
                            <a
                                href="/products"
                                className="btn-secondary px-8 py-4 text-base"
                            >
                                View All Products
                            </a>
                        </div>
                    )}
                </div>
            </section>

            {/* Categories Showcase */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">Shop by Category</span>
                        </h2>
                        <p className="text-lg text-gray-300">
                            Explore our wide range of product categories
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Audio Category */}
                        <a
                            href="/products?category=audio"
                            className="group relative h-80 rounded-2xl overflow-hidden hover-lift"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 group-hover:from-cyan-600/30 group-hover:to-blue-600/30 transition-all duration-300"></div>
                            <div className="absolute inset-0 glass-strong flex flex-col items-center justify-center text-center p-8">
                                <div className="text-6xl mb-4">🎧</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Audio</h3>
                                <p className="text-gray-300 mb-4">Premium headphones & speakers</p>
                                <span className="text-cyan-400 font-semibold group-hover:underline">
                                    Explore →
                                </span>
                            </div>
                        </a>

                        {/* Wearables Category */}
                        <a
                            href="/products?category=wearables"
                            className="group relative h-80 rounded-2xl overflow-hidden hover-lift"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300"></div>
                            <div className="absolute inset-0 glass-strong flex flex-col items-center justify-center text-center p-8">
                                <div className="text-6xl mb-4">⌚</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Wearables</h3>
                                <p className="text-gray-300 mb-4">Smartwatches & fitness trackers</p>
                                <span className="text-cyan-400 font-semibold group-hover:underline">
                                    Explore →
                                </span>
                            </div>
                        </a>

                        {/* Computers Category */}
                        <a
                            href="/products?category=computers"
                            className="group relative h-80 rounded-2xl overflow-hidden hover-lift"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all duration-300"></div>
                            <div className="absolute inset-0 glass-strong flex flex-col items-center justify-center text-center p-8">
                                <div className="text-6xl mb-4">💻</div>
                                <h3 className="text-2xl font-bold text-white mb-2">Computers</h3>
                                <p className="text-gray-300 mb-4">Laptops & accessories</p>
                                <span className="text-cyan-400 font-semibold group-hover:underline">
                                    Explore →
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <Newsletter />
        </div>
    );
};

export default Home;

