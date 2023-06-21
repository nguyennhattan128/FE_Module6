import {createSlice} from "@reduxjs/toolkit";
import {addProduct, createShop, editShop, getOwnShop} from "../../service/users/sellerService";


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
            state.currentShop = action.payload;
        })
        builder.addCase(getOwnShop.fulfilled, (state, action) => {
            state.currentShop = action.payload;
        })
        builder.addCase(editShop.fulfilled, (state, action) => {
            state.currentShop = action.payload;
        })
        builder.addCase(addProduct.fulfilled, (state, action)=>{
            state.listProduct.push(action.payload);
        })
    }
});

export default storeSlice.reducer;