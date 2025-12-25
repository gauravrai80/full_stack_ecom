import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// Fetch all products
export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (params = {}, { rejectWithValue }) => {
        try {
            const queryString = new URLSearchParams(params).toString();
            const { data } = await api.get(`/api/products?${queryString}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch products');
        }
    }
);

// Fetch single product
export const fetchProduct = createAsyncThunk(
    'products/fetchOne',
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await api.get(`/api/products/${id}`);
            return data.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch product');
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        currentProduct: null,
        loading: false,
        error: null,
        page: 1,
        pages: 1,
        total: 0,
    },
    reducers: {
        clearCurrentProduct: (state) => {
            state.currentProduct = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetch all products
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.data;
                state.page = action.payload.page;
                state.pages = action.payload.pages;
                state.total = action.payload.total;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Fetch single product
            .addCase(fetchProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.currentProduct = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearCurrentProduct } = productsSlice.actions;
export default productsSlice.reducer;
