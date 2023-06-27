import {createSlice} from "@reduxjs/toolkit";
import {getAllProduct, getProductDetail, searchProduct} from "../../service/product/ProductService";


const initialState = {
    listProduct: [],
    currentProduct: {}
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: builder => {
        builder.addCase(getAllProduct.fulfilled,(state, action) => {
            state.listProduct = action.payload;
        })
        builder.addCase(searchProduct.fulfilled,(state, action) => {
            state.listProduct = action.payload;
        })
        builder.addCase(getProductDetail.fulfilled,(state, action) => {
            state.currentProduct = action.payload;
        })

    }
})

export default productSlice.reducer;