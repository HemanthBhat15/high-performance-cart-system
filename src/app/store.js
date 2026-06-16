import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/counter/CounterSlice';
import authReducer from '../features/auth/authSlice';
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
    },
})