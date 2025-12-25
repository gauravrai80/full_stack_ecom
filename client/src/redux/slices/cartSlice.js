import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
    try {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        return [];
    }
};

const saveCartToStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadCartFromStorage(),
        totalItems: 0,
        totalAmount: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.product === action.payload.product
            );

            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }

            // Recalculate totals
            state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
            state.totalAmount = state.items.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );

            saveCartToStorage(state.items);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.product !== action.payload);

            // Recalculate totals
            state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
            state.totalAmount = state.items.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );

            saveCartToStorage(state.items);
        },
        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const item = state.items.find((item) => item.product === productId);

            if (item) {
                item.quantity = quantity;
            }

            // Recalculate totals
            state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
            state.totalAmount = state.items.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );

            saveCartToStorage(state.items);
        },
        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalAmount = 0;
            localStorage.removeItem('cart');
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
