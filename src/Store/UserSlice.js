import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



let initialState = {
    user:undefined,
    isAuth: false,
    loading:true
} 

export const getUser = createAsyncThunk(
    'user/getUser', 
    async () => {
        return  await axios.get(`${process.env.REACT_APP_API_LINK_DEV}/user`, {
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
            state.user = payload
            state.loading = false
            state.isAuth = true
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
            // state.user = undefined
            state.isAuth = false
        }
    }
})


export const userSliceActions = userSlice.actions
export default userSlice.reducer