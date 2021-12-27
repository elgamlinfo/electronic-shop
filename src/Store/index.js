import {configureStore} from '@reduxjs/toolkit'
import footerSliceReducer from './FooterSlice'
import UserSlice from './UserSlice'



const store = configureStore({
    reducer: {
        footerColor: footerSliceReducer,
        user: UserSlice
    }
})



export default store