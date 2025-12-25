import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, updateQuantity, clearCart } from '../redux/slices/cartSlice';

export const useCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const addItem = (product, quantity = 1) => {
        dispatch(
            addToCart({
                product: product._id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                quantity,
            })
        );
    };

    const removeItem = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const updateItemQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeItem(productId);
        } else {
            dispatch(updateQuantity({ productId, quantity }));
        }
    };

    const clearAllItems = () => {
        dispatch(clearCart());
    };

    return {
        items: cart.items,
        totalItems: cart.totalItems,
        totalAmount: cart.totalAmount,
        addItem,
        removeItem,
        updateItemQuantity,
        clearAllItems,
    };
};
