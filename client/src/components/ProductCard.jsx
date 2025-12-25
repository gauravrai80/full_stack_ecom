import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';

const ProductCard = ({ product }) => {
    const { addItem } = useCart();
    const navigate = useNavigate();
    const [selectedColor, setSelectedColor] = useState(0);

    const handleAddToCart = (e) => {
        e.preventDefault();
        addItem(product, 1);
    };

    const handleBuyNow = (e) => {
        e.preventDefault();
        addItem(product, 1);
        navigate('/checkout');
    };

    // Mock color options
    const colors = ['#1e293b', '#64748b', '#0ea5e9'];

    // Calculate discount percentage (mock)
    const discount = Math.floor(Math.random() * 30) + 10;
    const isNew = Math.random() > 0.7;

    return (
        <div className="group relative animate-fadeIn">
            <Link to={`/products/${product._id}`}>
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-4">
                    {/* Badges */}
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                        {isNew && (
                            <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-full">
                                NEW
                            </span>
                        )}
                        <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
                            -{discount}%
                        </span>
                    </div>

                    {/* Product Image */}
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                    {/* Category */}
                    <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                        {product.category}
                    </p>

                    {/* Title */}
                    <h3 className="text-white text-lg font-bold group-hover:text-cyan-400 transition-colors">
                        {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            <FaStar className="text-yellow-400 text-sm" />
                            <span className="text-white text-sm font-semibold ml-1">
                                {product.rating.toFixed(1)}
                            </span>
                        </div>
                        <span className="text-gray-400 text-xs">
                            ({product.numReviews.toLocaleString()} reviews)
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3">
                        <span className="text-white text-2xl font-bold">
                            ${product.price.toFixed(0)}
                        </span>
                        <span className="text-gray-500 text-lg line-through">
                            ${(product.price * (1 + discount / 100)).toFixed(0)}
                        </span>
                    </div>

                    {/* Color Options */}
                    <div className="flex items-center gap-2 pt-1">
                        {colors.map((color, index) => (
                            <button
                                key={index}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedColor(index);
                                }}
                                className={`w-6 h-6 rounded-full border-2 transition-all ${selectedColor === index
                                        ? 'border-cyan-400 scale-110'
                                        : 'border-gray-600'
                                    }`}
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
