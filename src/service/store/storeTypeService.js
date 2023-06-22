import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";

export const getStoreTypes = createAsyncThunk(
    'storeTypes/getAll',
    async () => {
        try {
            const response = await customAPI().get(`/store/storeType`);
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);