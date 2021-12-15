import {configureStore} from '@reduxjs/toolkit'
import footerSliceReducer from './FooterSlice'




const store = configureStore({
    reducer: {
        footerColor: footerSliceReducer
    }
})



export default store