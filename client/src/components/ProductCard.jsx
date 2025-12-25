import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';

const ProductCard = ({ product }) => {
    const { addItem } = useCart();
    const [selectedColor, setSelectedColor] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const handleAddToCart = (e) => {
        e.preventDefault();
        addItem(product, 1);
    };

    const toggleWishlist = (e) => {
        e.preventDefault();
        setIsWishlisted(!isWishlisted);
    };

    // Mock color options (you can add this to your product schema)
    const colors = ['#0ea5e9', '#8b5cf6', '#ec4899'];

    return (
        <div className="group relative">
            <div className="card overflow-hidden hover-lift animate-scaleIn">
                {/* Image Container */}
                <Link to={`/products/${product._id}`} className="block relative overflow-hidden rounded-xl">
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                        <span className="badge">
                            {product.category || 'Electronics'}
                        </span>
                    </div>

                    {/* Wishlist Button */}
                    <button
                        onClick={toggleWishlist}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full glass-strong flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
                    >
                        <FaHeart className={`${isWishlisted ? 'text-red-500' : 'text-gray-300'} transition-colors`} />
                    </button>

                    {/* Stock Badge */}
                    {product.stock === 0 && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">Out of Stock</span>
                        </div>
                    )}
                </Link>

                {/* Content */}
                <div className="p-5 space-y-3">
                    {/* Title */}
                    <Link to={`/products/${product._id}`}>
                        <h3 className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors line-clamp-2">
                            {product.name}
                        </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-sm text-gray-400 line-clamp-2">
                        {product.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={`text-sm ${i < Math.floor(product.rating)
                                            ? 'text-yellow-400'
                                            : 'text-gray-600'
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-sm text-gray-400">
                            {product.rating.toFixed(1)} ({product.numReviews})
                        </span>
                    </div>

                    {/* Price and Colors */}
                    <div className="flex items-center justify-between pt-2">
                        <div>
                            <span className="text-2xl font-bold text-cyan-400">
                                ${product.price.toFixed(2)}
                            </span>
                        </div>

                        {/* Color Swatches */}
                        <div className="flex items-center gap-2">
                            {colors.map((color, index) => (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedColor(index);
                                    }}
                                    className={`w-6 h-6 rounded-full border-2 transition-all hover:scale-110 ${selectedColor === index
                                            ? 'border-white scale-110'
                                            : 'border-transparent'
                                        }`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        disabled={product.stock === 0}
                        className={`w-full mt-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${product.stock === 0
                                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                : 'btn-primary'
                            }`}
                    >
                        <FaShoppingCart />
                        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

