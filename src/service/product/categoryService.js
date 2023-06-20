import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";

export const getCategories = createAsyncThunk(
    'categories/getAll',
    async () => {
        try {
            const response = await customAPI().get(`/categories`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);
