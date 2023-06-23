import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";
import axios from "axios";

export const getStaffList = createAsyncThunk(
    'staff/getStaffList',
    async () => {
            const response = await axios.get(`http://localhost:3001/admin/showAccount`);
            return response.data;
        }
)
export const searchStaff = createAsyncThunk(
    'staff/searchStaff',
    async (name) => {
        const response = await axios.get(`http://localhost:3001/admin/searchAccount/?name=${name}&username=${name}`);
        return response.data;
    }
)


export const addStaff = createAsyncThunk(
    'staff/addStaff',
    async (staff) => {
        const response = await customAPI().post(`admin/add-staff`,staff)
        return response.data;
    }
)


