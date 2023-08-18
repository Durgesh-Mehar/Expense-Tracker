import { createSlice } from "@reduxjs/toolkit";

const initialState2 = {
    showDarkTheme:false
}

const darkslice = createSlice({
    name:'dark',
    initialState:initialState2,
    reducers:{
        showDark(state){
            state.showDarkTheme = !state.showDarkTheme
        }
    }
})

export const darkAction = darkslice.actions;

export default darkslice;