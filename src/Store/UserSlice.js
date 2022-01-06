import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



let initialState = {
    user:null,
    isAuth: false,
    loading:localStorage.token?true:false
} 

export const getUser = createAsyncThunk(
    'user/getUser', 
    () => {
        return  axios.get(`${process.env.REACT_APP_API_LINK_DEV}/user`, {
            headers: {
                Authorization:  `Bearer ${localStorage.token}`
            }
        }).then(response => {
            return response.data
        })
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
            state.loading = null
            state.user = null
        }
    }
})


export const userSliceActions = userSlice.actions
export default userSlice.reducer