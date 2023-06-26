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

export const productInShop = createAsyncThunk(
    'product/productInShop',
    async ({page,page_size})=>{
        const response = await customAPI().get(`/products/shop-product/?page=${page}&page_size=${page_size}`);
        return response.data.data;
            }
)