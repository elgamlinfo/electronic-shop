import {configureStore} from '@reduxjs/toolkit'
import footerSliceReducer from './FooterSlice'
import UserSlice from './UserSlice'
import cartSlice from './cartSlice'


const store = configureStore({
    reducer: {
        footerColor: footerSliceReducer,
        user: UserSlice,
        cart: cartSlice
    }
})



export default store