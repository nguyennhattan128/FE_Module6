import {createSlice} from "@reduxjs/toolkit";
import {
    getAllProduct,
    productInShop,
    searchProduct,
    showProductByName,
    getProductDetail,
    MainProduct
} from "../../service/product/ProductService";


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
        builder.addCase(MainProduct.fulfilled,(state, action) =>{
            state.total = action.payload.total;
            state.listProduct = action.payload.listProducts;
        })

    }
})

export default productSlice.reducer;