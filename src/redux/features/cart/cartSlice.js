import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if (!existingItem) {
                state.cartItems.push(action.payload);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product added to the Cart",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else (
                Swal.fire({
                    title: "Already Added to the Cart?",

                    icon: "warning",
                    showCancelButton: false,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK"
                })
            )
        }

    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;