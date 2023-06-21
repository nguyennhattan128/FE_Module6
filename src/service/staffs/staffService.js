import { createAsyncThunk, } from '@reduxjs/toolkit'
import axios from "axios";
import CustomAPI from "../CustomAPI";



export const getAllStaffs = createAsyncThunk(
    'auth/staffs',
    async () => {
        const response = await CustomAPI().get(`auth/staffs`)
        return response.data
    }
)

