import {createSlice} from "@reduxjs/toolkit";
import {getAllProduct, productInShop, searchProduct} from "../../service/product/ProductService";


const initialState = {
    total:0,
    listProduct: []
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
        builder.addCase(productInShop.fulfilled,(state, action) => {
            state.total = action.payload.total;
            state.listProduct = action.payload.products;
        })

    }
})

export default productSlice.reducer;