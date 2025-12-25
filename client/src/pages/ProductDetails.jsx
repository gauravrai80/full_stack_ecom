import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../redux/slices/productsSlice';
import { useCart } from '../hooks/useCart';
import Loader from '../components/Loader';
import { FaStar } from 'react-icons/fa';

const ProductDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { currentProduct: product, loading } = useSelector((state) => state.products);
    const { addItem } = useCart();

    const [quantity, setQuantity] = React.useState(1);

    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id]);

    const handleAddToCart = () => {
        if (product) {
            addItem(product, quantity);
            setQuantity(1);
        }
    };

    if (loading) return <Loader />;
    if (!product) return <div className="text-center py-12">Product not found</div>;

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                        {/* Product Image */}
                        <div>
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-96 object-cover rounded-lg"
                            />
                        </div>

                        {/* Product Info */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

                            {/* Rating */}
                            <div className="flex items-center mb-4">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={
                                                i < Math.floor(product.rating)
                                                    ? 'text-yellow-400'
                                                    : 'text-gray-300'
                                            }
                                        />
                                    ))}
                                </div>
                                <span className="ml-2 text-gray-600">
                                    {product.rating.toFixed(1)} ({product.numReviews} reviews)
                                </span>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-primary-600">
                                    ${product.price.toFixed(2)}
                                </span>
                            </div>

                            {/* Description */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold mb-2">Description</h3>
                                <p className="text-gray-700">{product.description}</p>
                            </div>

                            {/* Category */}
                            <div className="mb-6">
                                <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
                                    {product.category}
                                </span>
                            </div>

                            {/* Stock */}
                            <div className="mb-6">
                                <p className="text-gray-700">
                                    <span className="font-semibold">Stock:</span>{' '}
                                    {product.stock > 0 ? (
                                        <span className="text-green-600">{product.stock} available</span>
                                    ) : (
                                        <span className="text-red-600">Out of stock</span>
                                    )}
                                </p>
                            </div>

                            {/* Quantity & Add to Cart */}
                            {product.stock > 0 && (
                                <div className="flex items-center space-x-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Quantity
                                        </label>
                                        <input
                                            type="number"
                                            min="1"
                                            max={product.stock}
                                            value={quantity}
                                            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                                            className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                                        />
                                    </div>
                                    <button
                                        onClick={handleAddToCart}
                                        className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
