import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";

export const createStore = createAsyncThunk(
    'store/createStore',
    async (newStore) => {
        try {
            const response = await customAPI().post(`/store/create`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);
