import {createSlice} from "@reduxjs/toolkit";
import {getOrder} from "../../service/order/orderService";



const initialState = {
    currentOrder: {}
}
const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: builder => {
        builder.addCase(getOrder.fulfilled,(state, action) => {
            state.currentOrder = action.payload;
        })
    }
})

export default orderSlice.reducer;