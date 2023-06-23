import {createSlice} from "@reduxjs/toolkit";
import {getAllProduct, searchProduct} from "../../service/product/ProductService";


const initialState = {
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

    }
})

export default productSlice.reducer;