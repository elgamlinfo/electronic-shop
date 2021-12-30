import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




let initialState = {
    user:undefined,
    isAuth: false,
    loading:true
} 

export const getUser = createAsyncThunk(
    'user/getUser', 
    () => {
        return  axios.get(`${process.env.REACT_APP_API_LINK_DEV}/user`, {
            headers: {
                Authorization:  `Bearer ${localStorage.token}`
            }
        }).then(response => response.data)
    }   
)

const userSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true
        },
        [getUser.fulfilled]: (state, {payload}) => {
            state.isAuth = true
            state.loading = false
            state.user = payload
        },
    }, 
    reducers: {
        setUserData(state, action){
            state.user = action.payload
        },
        setAuthToken(state,action){
            state.authToken = action.payload
        },
        setIsAuth(state, action) {
            state.isAuth = !state.isAuth
            state.loading = false
        },
        logout(state) {
            state.isAuth = false
            state.loading = true
        }
    }
})


export const userSliceActions = userSlice.actions
export default userSlice.reducer