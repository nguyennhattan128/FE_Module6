import {createSlice} from "@reduxjs/toolkit";
import {
    changeOrderDetailQuantity,
    changeOrderDetailQuantityByInput,
    deleteOrderDetail,
    getOrder
} from "../../service/order/orderService";



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
        builder.addCase(changeOrderDetailQuantity.fulfilled,(state, action) => {
            state.currentOrder = action.payload;
        })
        builder.addCase(deleteOrderDetail.fulfilled,(state, action) => {
            state.currentOrder = action.payload;
        })
        builder.addCase(changeOrderDetailQuantityByInput.fulfilled,(state, action) => {
            state.currentOrder = action.payload;
        })

    }
})

export default orderSlice.reducer;