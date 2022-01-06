import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    cart: {
        userId: null,
        qnt: 0,
        totalPrice: 0,
        products: []
    },
    cartLoading: false
}

export const getCart = createAsyncThunk(
    'cart/getCart', 
    () => {
        return  axios.get(`${process.env.REACT_APP_API_LINK_DEV}/cart`, {
            headers: {
                Authorization:  `Bearer ${localStorage.token}`
            }
        }).then(response => {
            return response.data
        })
    }   
)

const cartSlice = createSlice({
    name: "cart",
    initialState,
    extraReducers: {
        [getCart.pending]: (state) => {
            state.cartLoading = true
        },
        [getCart.fulfilled]: (state, {payload}) => {
            if(payload){
                state.cart.userId = payload.userId;
                state.cart.qnt = payload.qnt;
                state.cart.totalPrice = payload.totalPrice;
                state.cart.products = payload.products
                state.cartLoading = false
            }
        }
    },
    reducers: {
        addToCart (state, action) {
            let newItem = action.payload
            let isExist = state.cart.products.find(product => product.prodId === newItem.prodId)
            if(!isExist) {
                let data = {...newItem, 
                    qnt: 1,
                    totalPrice: newItem.price
                }
                state.cart.products.push(data)
            }else {
                isExist.qnt++;
                isExist.totalPrice += newItem.price
            }
            state.cart.totalPrice = state.cart.totalPrice+newItem.price
            state.cart.qnt = state.cart.qnt+1;
        }
    }
})



export const cartActions = cartSlice.actions
export default cartSlice.reducer