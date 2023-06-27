import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";


export const getAllProduct = createAsyncThunk(
    'product/getAllProduct',
    async () => {
        const response = await customAPI().get(`http://localhost:3001/products`);
        return response.data;
    }
)
export const searchProduct = createAsyncThunk(
    'product/searchProduct',
    async (keyword) => {
        const response = await customAPI().get(`http://localhost:3001/products/search/productName/?name=${keyword}`);
        return response.data;
    }
)


export const getProductDetail = createAsyncThunk(
    'product/getOne',
    async (id) => {
        console.log(id, 111)
        const response = await customAPI().get(`/products/product-detail/${id}`);
        console.log(response)
        return response.data;
    }
)