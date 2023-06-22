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