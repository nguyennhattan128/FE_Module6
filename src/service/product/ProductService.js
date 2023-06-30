import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";
import {useParams} from "react-router-dom";


export const getAllProduct = createAsyncThunk(
    'product/getAllProduct',
    async () => {
        const response = await customAPI().get(`products`,);
        return response.data;
    }
)
export const getAllProductByStoreId = createAsyncThunk(
    'product/getAllProductByStoreId',
    async (storeId) => {
        const response = await customAPI().post(`products/store`,{data:storeId});
        return response.data;
    }
)
export const searchProduct = createAsyncThunk(
    'product/searchProduct',
    async (arg) => {
        const response = await customAPI().get(`/seller/search/productName?name=${arg.keyword}&storeId=${arg.storeId}`);
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

export const MainProduct = createAsyncThunk(
    'product/MainProduct',
    async (arg) => {
        let filter = arg.filters
        let {page,page_size} = filter
        const response = await customAPI().get(`products/main-product?page=${page}&page_size=${page_size}`)
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


export const getProductDetail = createAsyncThunk(
    'product/getOne',
    async (id) => {
        const response = await customAPI().get(`/products/product-detail/${id}`);
        return response.data;
    }
)