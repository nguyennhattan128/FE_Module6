import { createAsyncThunk, } from '@reduxjs/toolkit'
import axios from "axios";
import CustomAPI from "../customAPI";



export const getAllStaffs = createAsyncThunk(
    'auth/staff',
    async () => {
        const response = await CustomAPI().get(`auth/staffs`)
        return response.data
    }
)

