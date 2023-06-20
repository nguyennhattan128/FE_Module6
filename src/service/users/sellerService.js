import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";


export const createShop = createAsyncThunk(
    'seller/createStore',
    async (newStore) => {
        try {
            const response = await customAPI().post(`/store/create`, newStore);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);

export const editShop = createAsyncThunk(
    'seller/editStore',
    async (editShop) => {
        try {
            await customAPI().put(`/store/edit`, editShop);
            return editShop
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);



export const getOwnShop = createAsyncThunk(
    'seller/getOwnShop',
    async () => {
        try {
            const response =  await customAPI().get(`/store/storeDetail`);
            return response.data
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);


export const addProduct = createAsyncThunk(
    'seller/addProduct',
    async (values) => {
        try {
            const newProduct = await customAPI().post('/seller/addProduct', values);
            return newProduct.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);


export const getOneProduct = createAsyncThunk(
    'seller/getOneProduct',
    async (productId) => {
        try {
            const response = await customAPI().get(`products/getOne/${productId}`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);



export const editProduct = createAsyncThunk(
    'seller/editProduct',
    async ({ updateProduct, images, productId }) => {
        try {
            await customAPI().put(`seller/editProduct/${productId}`);
            return {updateProduct, images, productId};
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);




