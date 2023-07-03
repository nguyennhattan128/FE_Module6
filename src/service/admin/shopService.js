import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";


// export const getShopList = createAsyncThunk(
//     'shop/getShopList',
//     async () => {
//             const response = await customAPI().get(`http://localhost:3001/admin/showAccount`);
//             return response.data;
//         }
// )
export const getShopPagination = createAsyncThunk(
    'shop/getShopPagination',
    async ({page,page_size}) => {
        const response = await customAPI().get(`admin/pagination-shops/?page=${page}&page_size=${page_size}`);
        return response.data.data;
    }
)

export const getShopPaginationActive = createAsyncThunk(
    'shop/getShopPaginationActive',
    async ({page,page_size}) => {
        const response = await customAPI().get(`admin/pagination-shops-active/?page=${page}&page_size=${page_size}`);
        console.log(response.data.data, 111)
        return response.data.data;
    }
)

export const searchShop = createAsyncThunk(
    'shop/searchShop',
    async (name) => {
        const response = await customAPI().get(`http://localhost:3001/store/searchStore?name=${name}`);
        return response.data;
    }
)

export const searchShopActive = createAsyncThunk(
    'shop/searchShopActive',
    async (name) => {
        const response = await customAPI().get(`http://localhost:3001/store/searchStoreActive?name=${name}`);
        return response.data;
    }
)


export const enablingShop = createAsyncThunk(
    'shop/enablingShop',
    async (idUser) => {
        const response = await customAPI().post(`http://localhost:3001/admin/enablingAccount`,idUser)
        return response.data;
    }
)

export const rejectShop = createAsyncThunk(
    'shop/rejectShop',
    async (idUser) => {
        const response = await customAPI().post(`http://localhost:3001/admin/rejectAccount`,idUser)
        return response.data;
    }
)





