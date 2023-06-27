import {createSlice} from "@reduxjs/toolkit";
import {getAllProduct, productInShop, searchProduct, showProductByName} from "../../service/product/ProductService";
import {getAllProduct, getProductDetail, searchProduct} from "../../service/product/ProductService";


const initialState = {
    listProduct: [],
    currentProduct: {},
    total:0
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
            state.listProduct = action.payload.newProducts;
        })
        builder.addCase(showProductByName.fulfilled,(state, action) => {
            state.total = action.payload.total;
            state.listProduct = action.payload.listProducts;
        })
        builder.addCase(getProductDetail.fulfilled,(state, action) => {
            state.currentProduct = action.payload;
        })

    }
})

export default productSlice.reducer;