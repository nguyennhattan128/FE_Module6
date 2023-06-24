import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";


export const getOrder = createAsyncThunk(
    'order/getOrder',
    async () => {
        const response = await customAPI().get(`/order`);
        console.log(response.data.data)
        return response.data.data;
    }
)
