import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    user:undefined,
    isAuth: false,
    authToken:undefined
} 

const userSlice = createSlice({
    name:'user',
    initialState, 
    reducers: {
        setUserData(state, action){
            state.user = action.payload
        },
        setAuthToken(state,action){
            state.authToken = action.payload
        },
        setIsAuth(state, action) {
            state.isAuth = !state.isAuth
        }
    }
})


export const userSliceActions = userSlice.actions
export default userSlice.reducer