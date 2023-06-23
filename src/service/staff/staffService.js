import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";


export const getStaffList = createAsyncThunk(
    'staff/getStaffList',
    async () => {
            const response = await customAPI().get(`http://localhost:3001/admin/showAccount`);
            return response.data;
        }
)
export const searchStaff = createAsyncThunk(
    'staff/searchStaff',
    async (name) => {
        const response = await customAPI().get(`http://localhost:3001/admin/searchAccount/?name=${name}&username=${name}`);
        return response.data;
    }
)