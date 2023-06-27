import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";


export const getOrderDetails = createAsyncThunk(
    'order/getOrderDetails',
    async () => {
        const response = await customAPI().get(`/order-detail`);
        return response.data;
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
    'order/deleteOrderDetail',
    async ( {orderDetailId, productId} ) => {
        const response = await customAPI().delete(`/order/orderDetail/${orderDetailId}`,  { data: { productId } });
        return response.data.data;
    }
)


export const increaseOrder = createAsyncThunk(
    'order/increaseOrderDetailQuantity',
    async ( {data} ) => {
        const response = await customAPI().post(`order/orderDetail/increase`,  data);
        return response.data;
    }
)


export const decreaseOrder = createAsyncThunk(
    'order/decreaseOrderDetailQuantity',
    async ( {data} ) => {
        const response = await customAPI().post(`order/orderDetail/decrease`,  data);
        return response.data;
    }
)
export const buyProduct = createAsyncThunk(
    'order/buyProduct',
    async (data ) => {
        const response = await customAPI().post(`client/buy-product`, data);
        return response.data;
    }
)

export const addToOrder = createAsyncThunk(
    'order/addToOrder',
    async ( data ) => {
        const response = await customAPI().post(`client/buy-product`,  data);
        return response.data;
    }
)











