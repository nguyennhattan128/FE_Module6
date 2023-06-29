import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";


export const getStaffList = createAsyncThunk(
    'staff/getStaffList',
    async () => {
            const response = await customAPI().get(`http://localhost:3001/admin/showAccount`);
            return response.data;
        }
)
export const getStaffPagination = createAsyncThunk(
    'staff/getStaffPagination',
    async ({page,page_size}) => {
        const response = await customAPI().get(`admin/pagination-staffs/?page=${page}&page_size=${page_size}`);
        return response.data.data;
    }
)

export const deleteStaffById = createAsyncThunk(
    'staff/deleteStaffById',
    async (idStaff) => {
        const response = await customAPI().delete(`admin/delete-staff/${idStaff}`)
    }
)


export const searchStaff = createAsyncThunk(
    'staff/searchStaff',
    async (name) => {
        const response = await customAPI().get(`http://localhost:3001/admin/searchAccount/?name=${name}&username=${name}`);
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



