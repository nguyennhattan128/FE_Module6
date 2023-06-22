import {createSlice} from "@reduxjs/toolkit";
import {getStoreTypes} from "../../service/store/storeTypeService";

const initialState = {
    listStoreType: []
}
const storeTypeSlice = createSlice(
    {
        name: 'StoreType',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getStoreTypes.fulfilled, (currentState, action)=>{
                currentState.listStoreType = action.payload
            })
        }
    }
)
export default storeTypeSlice.reducer