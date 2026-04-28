import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';
import authReducer from '../features/auth/authSlice';
export const store = configureStore({
    reducer: {
        cart: counterReducer,
        auth: authReducer,
    },
})