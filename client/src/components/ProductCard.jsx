import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';

const ProductCard = ({ product }) => {
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem(product, 1);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <Link to={`/products/${product._id}`}>
                <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
            </Link>
            <div className="p-4">
                <Link to={`/products/${product._id}`}>
                    <h3 className="text-lg font-semibold text-gray-800 hover:text-primary-600 transition">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {product.description}
                </p>
                <div className="flex items-center mt-2">
                    <FaStar className="text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">
                        {product.rating.toFixed(1)} ({product.numReviews})
                    </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-2xl font-bold text-primary-600">
                        ${product.price.toFixed(2)}
                    </span>
                    <button
                        onClick={handleAddToCart}
                        disabled={product.stock === 0}
                        className={`px-4 py-2 rounded-lg transition ${product.stock === 0
                                ? 'bg-gray-300 cursor-not-allowed'
                                : 'bg-primary-600 text-white hover:bg-primary-700'
                            }`}
                    >
                        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
