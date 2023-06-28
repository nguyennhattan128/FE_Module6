import {createSlice} from "@reduxjs/toolkit";
import {
    addToOrder,
    buyProduct,
    changeOrderDetailQuantity,
    changeOrderDetailQuantityByInput, decreaseOrder,
    deleteOrderDetail, getOrderDetails, getOrderDetailStatusTrue,
    increaseOrder
} from "../../service/order/orderService";



const initialState = {
    currentOrder: {},
    orderDetails:[],
    orderDetailStatusTrue: []
}
const orderSlice = createSlice({
    name: 'order',
    initialState,
    extraReducers: builder => {
        builder.addCase(changeOrderDetailQuantity.fulfilled,(state, action) => {
            state.currentOrder = action.payload;
        })
        builder.addCase(deleteOrderDetail.fulfilled,(state, action) => {
            state.currentOrder = action.payload;
        })
        builder.addCase(changeOrderDetailQuantityByInput.fulfilled,(state, action) => {
            state.currentOrder = action.payload;
        })
        builder.addCase(increaseOrder.fulfilled,(state, action) => {
            state.currentOrder = action.payload;
        })
        builder.addCase(decreaseOrder.fulfilled,(state, action) => {
            state.currentOrder = action.payload;
        })
        builder.addCase(buyProduct.fulfilled,(state, action) => {
            state.orderDetails = action.payload;
        })
        builder.addCase(addToOrder.fulfilled,(state, action) => {
            state.orderDetails = action.payload;
        })
        builder.addCase(getOrderDetails.fulfilled,(state, action) => {
            state.orderDetails = action.payload;
        })
        builder.addCase(getOrderDetailStatusTrue.fulfilled,(state, action) => {
            state.orderDetailStatusTrue = action.payload;
        })
    }
})

export default orderSlice.reducer;