import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showfiture : false,
}

const activeSlice = createSlice({
    name:"active",
    initialState: initialState,
    reducers : {
        showActive(state){
           state.showfiture = ! state.showfiture
       } 
    }
})

export const activeAction = activeSlice.actions;
 
export default activeSlice;