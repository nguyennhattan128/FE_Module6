import {createSlice} from "@reduxjs/toolkit";
import {
    getAllProduct,
    productInShop,
    searchProduct,
    showProductByName,
    getProductDetail,
    MainProduct,
    getAllProductByStoreId
} from "../../service/product/ProductService";


const initialState = {
    listProduct: [],
    listProduct1 : [],
    listProduct2 : [],
    currentProduct: {},
    total:0,
    listProductByStore: []
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: builder => {
        builder.addCase(getAllProduct.fulfilled,(state, action) => {
            state.listProduct = action.payload;
        })
        builder.addCase(searchProduct.fulfilled,(state, action) => {
            state.listProductByStore = action.payload;
        })
        builder.addCase(productInShop.fulfilled,(state, action) => {
            state.total = action.payload.total;
            state.listProduct1 = action.payload.newProducts;
        })
        builder.addCase(showProductByName.fulfilled,(state, action) => {
            state.total = action.payload.total;
            state.listProduct2 = action.payload.listProducts;
        })
        builder.addCase(getProductDetail.fulfilled,(state, action) => {
            state.currentProduct = action.payload;
        })
        builder.addCase(MainProduct.fulfilled,(state, action) =>{
            state.total = action.payload.total;
            state.listProduct = action.payload.listProducts;
        })
        builder.addCase(getAllProductByStoreId.fulfilled,(state, action) =>{
            state.listProductByStore = action.payload;
        })

    }
})

export default productSlice.reducer;