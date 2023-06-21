import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";


export const createShop = createAsyncThunk(
    'seller/createShop',
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