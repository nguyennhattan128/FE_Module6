import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";
import {useParams} from "react-router-dom";


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
    async (arg)=>{
        let filter = arg.filters
        let {page,page_size} = filter
        let idStore = arg.idStore
        const response = await customAPI().get(`/store/shop-product/?page=${page}&page_size=${page_size}&idStore=${idStore}`);
        return response.data.data;
            }
)

export const showProductByName = createAsyncThunk(
    'product/showProductByName',
    async (arg) => {
        let filter = arg.filters;
        let {page,page_size} = filter;
        let name = arg.nameProduct;
        const response = await customAPI().get(`/products/search/productName/?page=${page}&page_size=${page_size}&name=${name}`)
        return response.data.data
    }
)