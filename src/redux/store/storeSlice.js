import {createSlice} from "@reduxjs/toolkit";

const storeSlice = createSlice({
    name: 'store',
    initialState: {
        list: []
    },
    extraReducers: builder => {


    }
});

export default storeSlice.reducer;