import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

const API_URL = "http://localhost:3001"

export const allStaff = async () => {
    try {
        const req = {headers:{authorization : `Bearer ${localStorage.getItem('token')}`}};
        const res = await axios.get(`${API_URL}/admin/showAccount`, req)
        return res.data;
    } catch (err) {
        console.log(err.message)
    }
}