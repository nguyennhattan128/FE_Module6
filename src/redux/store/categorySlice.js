import {createSlice} from "@reduxjs/toolkit";
import {getStoreTypes} from "../../service/store/storeTypeService";
import {getCategories} from "../../service/product/categoryService";

const initialState = {
    listCategory: []
}
const categorySlice = createSlice(
    {
        name: 'category',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getCategories.fulfilled, (currentState, action)=>{
                currentState.listCategory = action.payload
            })
        }
    }
)
export default categorySlice.reducer