import {getCategories} from "../../service/store/categoryService";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    listCategory: []
}
const categorySlice = createSlice(
    {
        name: 'Category',
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
