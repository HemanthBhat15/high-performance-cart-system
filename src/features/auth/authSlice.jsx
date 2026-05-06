import { createSlice } from '@reduxjs/toolkit';

const savedAuth = JSON.parse(localStorage.getItem("auth"));
console.log(savedAuth);
let initialState = {
    isLoggedIn: false,
    user: null,
};

if (savedAuth) {
    const isExpired = Date.now() > savedAuth.expiry;

    if (!isExpired) {
        initialState = {
            isLoggedIn: true,
            user: savedAuth.user,
        };
    } else {
        localStorage.removeItem("auth");
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const expiry = Date.now() + 60 * 1000; // 1 minute

            const authData = {
                user: action.payload,
                expiry: expiry,
            };

            state.isLoggedIn = true;
            state.user = action.payload;

            // ✅ correct key + structure
            localStorage.setItem('auth', JSON.stringify(authData));
        },

        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;

            // ✅ remove correct key
            localStorage.removeItem('auth');
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;