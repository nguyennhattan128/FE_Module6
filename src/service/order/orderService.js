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
export const getOrderDetailStatusTrue = createAsyncThunk(
    'orderDetail/getOrderDetailStatusTrue',
    async () => {
        const response = await customAPI().get('order-detail/invoice');
        return response.data;
    }
)


export const checkout = createAsyncThunk(
    'order/payOrder',
    async () => {
        const response = await customAPI().get('order/checkout');
        return response.data;
    }
)
export const getOrderDetailPending = createAsyncThunk(
    'orderDetail/getOrderDetailPending',
    async () => {
        const response = await customAPI().get('order-detail/pending');
        return response.data;
    }
)
export const getOrderDetailPendingReceipt = createAsyncThunk(
    'orderDetail/getOrderDetailPendingReceipt',
    async (storeId) => {
        const response = await customAPI().post('order-detail/pending-receipt',{data:storeId});
        console.log("res getPending:", response)
        return response.data;
    }
)
export const updateOrderDetailPendingReceipt = createAsyncThunk(
    'orderDetail/updateOrderDetailPendingReceipt',
    async (arg) => {
        try {
            const response = await customAPI().post('order-detail/pending-receipt/update',arg);
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }
)














