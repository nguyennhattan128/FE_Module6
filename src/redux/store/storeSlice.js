import {createSlice} from "@reduxjs/toolkit";
import {createShop} from "../../service/users/sellerService";


const initialState = {
    currentShop: {},
    currentProduct: {},
    listProduct: []
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