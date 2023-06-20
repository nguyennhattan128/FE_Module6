import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";


export const createShop = createAsyncThunk(
    'client/createShop',
    async (newShop) => {
        try {
            const response = await customAPI().post(`/store/create-store`, newShop);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);