import {createSlice} from "@reduxjs/toolkit";
import {createShop, editShop, addProduct, getOneProduct, editProduct} from "../../service/users/sellerService";






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
        builder.addCase(editShop.fulfilled, (state, action) => {
            state.currentStore = action.payload;
        })
        builder.addCase(addProduct.fulfilled, (state, action)=>{
                state.listProduct.push(action.payload);
            })
        builder.addCase(getOneProduct.fulfilled, (state, action)=>{
                state.currentProduct = action.payload;
        })
        builder.addCase(editProduct.fulfilled, (state, action)=>{
            const { updateProduct, images, productId } = action.payload;
            let index = -1;
            for (let i = 0; i < state.listProduct.length; i++) {
                if(state.listProduct[i].id === productId){
                    index = i;
                }
            }
            if (index !== -1) {
                state.listProduct[index] = {
                    ...updateProduct,
                    images: images
                };
            }
        })




    }
});

export default storeSlice.reducer;












