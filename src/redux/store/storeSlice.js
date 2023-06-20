import {createSlice} from "@reduxjs/toolkit";
import {createShop} from "../../service/store/storeService";


// const storeSlice = createSlice({
//     name: 'store',
//     initialState: {
//         list: []
//     },
//     extraReducers: builder => {
//
//
//     }
// });

const initialState = {
    currentStore: {},
}

const storeSlice = createSlice({
    name: 'store',
    initialState,
    extraReducers: builder => {
        builder.addCase(createShop.fulfilled, (state, action) => {
            state.currentStore = action.payload;
        })
    }
});

export default storeSlice.reducer;



