import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../redux/slices/productsSlice';
import { useCart } from '../hooks/useCart';
import Loader from '../components/Loader';
import { FaStar, FaShoppingCart, FaBolt, FaHeart, FaCheck } from 'react-icons/fa';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentProduct: product, loading } = useSelector((state) => state.products);
    const { addItem } = useCart();

    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);

    // Mock color options
    const colors = [
        { name: 'Cyan', value: '#0ea5e9' },
        { name: 'Purple', value: '#8b5cf6' },
        { name: 'Pink', value: '#ec4899' }
    ];

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id]);

    const handleAddToCart = () => {
        if (product) {
            addItem(product, quantity);
        }
    };

    const handleBuyNow = () => {
        if (product) {
            addItem(product, quantity);
            navigate('/checkout');
        }
    };

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center"><Loader /></div>;
    if (!product) return <div className="min-h-screen flex items-center justify-center text-white">Product not found</div>;

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="card overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8">
                        {/* Product Image */}
                        <div className="space-y-4">
                            <div className="relative rounded-2xl overflow-hidden glass-strong">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-[500px] object-cover"
                                />
                                {/* Wishlist Button */}
                                <button
                                    onClick={toggleWishlist}
                                    className="absolute top-4 right-4 w-12 h-12 rounded-full glass-strong flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    <FaHeart className={`text-xl ${isWishlisted ? 'text-red-500' : 'text-gray-300'}`} />
                                </button>

                                {/* Category Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="badge">
                                        {product.category}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            {/* Title */}
                            <h1 className="text-4xl font-bold text-white">
                                {product.name}
                            </h1>

                            {/* Rating */}
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`text-lg ${i < Math.floor(product.rating)
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-600'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-300">
                                    {product.rating.toFixed(1)} ({product.numReviews} reviews)
                                </span>
                            </div>

                            {/* Price */}
                            <div>
                                <span className="text-5xl font-bold text-cyan-400">
                                    ${product.price.toFixed(2)}
                                </span>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-white">Description</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Stock Status */}
                            <div className="flex items-center gap-2">
                                <span className="text-gray-400">Stock:</span>
                                {product.stock > 0 ? (
                                    <span className="flex items-center gap-2 text-green-400">
                                        <FaCheck /> {product.stock} available
                                    </span>
                                ) : (
                                    <span className="text-red-400">Out of stock</span>
                                )}
                            </div>

                            {/* Color Selection */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold text-white">Color</h3>
                                <div className="flex items-center gap-3">
                                    {colors.map((color, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedColor(index)}
                                            className={`relative w-10 h-10 rounded-full border-2 transition-all hover:scale-110 ${selectedColor === index
                                                    ? 'border-white scale-110 shadow-lg shadow-cyan-500/50'
                                                    : 'border-gray-600'
                                                }`}
                                            style={{ backgroundColor: color.value }}
                                            title={color.name}
                                        >
                                            {selectedColor === index && (
                                                <FaCheck className="absolute inset-0 m-auto text-white text-sm" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity */}
                            {product.stock > 0 && (
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-white">Quantity</h3>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-10 h-10 rounded-lg glass-strong flex items-center justify-center text-white hover:bg-cyan-500/20 transition-colors"
                                        >
                                            -
                                        </button>
                                        <span className="text-2xl font-bold text-white w-12 text-center">
                                            {quantity}
                                        </span>
                                        <button
                                            onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                            className="w-10 h-10 rounded-lg glass-strong flex items-center justify-center text-white hover:bg-cyan-500/20 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons */}
                            {product.stock > 0 ? (
                                <div className="flex gap-4 pt-4">
                                    <button
                                        onClick={handleAddToCart}
                                        className="flex-1 btn-secondary py-4 text-lg font-semibold flex items-center justify-center gap-3"
                                    >
                                        <FaShoppingCart />
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={handleBuyNow}
                                        className="flex-1 btn-primary py-4 text-lg font-semibold flex items-center justify-center gap-3"
                                    >
                                        <FaBolt />
                                        Buy Now
                                    </button>
                                </div>
                            ) : (
                                <button
                                    disabled
                                    className="w-full py-4 rounded-lg bg-gray-700 text-gray-400 font-semibold cursor-not-allowed"
                                >
                                    Out of Stock
                                </button>
                            )}

                            {/* Features */}
                            <div className="pt-6 border-t border-white/10">
                                <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-3 text-gray-300">
                                        <FaCheck className="text-cyan-400" />
                                        Free shipping on orders over $50
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-300">
                                        <FaCheck className="text-cyan-400" />
                                        30-day money-back guarantee
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-300">
                                        <FaCheck className="text-cyan-400" />
                                        1-year warranty included
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-300">
                                        <FaCheck className="text-cyan-400" />
                                        24/7 customer support
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
