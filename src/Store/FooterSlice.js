import {createSlice} from '@reduxjs/toolkit'

const initialState = {color: ''}

const footerSlice = createSlice({
    name: 'footerColor',
    initialState,
    reducers: {
        setFooterColor (state, action) {
            state.color = action.payload.color;
        }
    }
})



export const footerActions = footerSlice.actions;

export default footerSlice.reducer