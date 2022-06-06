import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    product: [],
    cart: []
};

const GlobalState = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        createUser: (state, { payload }) => {
            state.user = payload;
        },
        addProduct: (state, { payload }) => {
            state.product = payload;
        },

        addToCart: (state, { payload }) => {
            const check = state.cart.findIndex((el) => el._id === payload._id);

            if (check >= 0) {
                state.cart[ check ].QTY += 1;
            } else {
                state.cart.push({ ...payload, QTY: 1 });
            }
        },

        removeFrom: (state, { payload }) => {
            state.cart = state.cart.findIndex((el) => el._id !== payload._id);
        },

        signOut: (state) => {
            state.user = null;
        }
    }
});

export const { createUser, signOut, addProduct, addToCart, removeFrom } = GlobalState.actions;

export default GlobalState.reducer;