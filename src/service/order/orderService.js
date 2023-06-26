import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";


export const getOrder = createAsyncThunk(
    'order/getOrder',
    async () => {
        const response = await customAPI().get(`/order`);
        return response.data.data;
    }
)

export const changeOrderDetailQuantity = createAsyncThunk(
    'order/changeOrderDetailQuantity',
    async ({ orderId, orderDetailId, quantity, price, productId }) => {
        const response = await customAPI().put(`/order/${orderId}/orderDetail/${orderDetailId}`, { quantity, price, productId });
        return response.data.data;
    }
);

export const changeOrderDetailQuantityByInput = createAsyncThunk(
    'order/changeOrderDetailQuantityByInput',
    async ({ orderId, orderDetailId, quantity, price, productId }) => {
        const response = await customAPI().put(`/order/${orderId}/orderDetail-input/${orderDetailId}`, { quantity, price, productId });
        return response.data.data;
    }
);




export const deleteOrderDetail = createAsyncThunk(
    'order/decreaseOrderDetailQuantity',
    async ( {orderDetailId, productId} ) => {
        const response = await customAPI().delete(`/order/orderDetail/${orderDetailId}`,  { data: { productId } });
        return response.data.data;
    }
)



