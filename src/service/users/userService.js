import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "../customAPI";
const API_URL = "http://localhost:3001"


export const register =  async (user) => {
    try {
        const res =await axios.post(`http://localhost:3001/register`, user)
        return res.data
    }catch (err){
        console.log('lỗi là:',err)
    }
};

export const login = async(user) => {
    try {
        const res = await axios.post(`${API_URL}/login`, user)
        return res.data
    } catch (err) {
        console.log(err.message)
    }
}

export const allStaff = async () => {
    try {
        const req = {headers:{authorization : `Bearer ${localStorage.getItem('token')}`}};
        console.log('123')
        console.log(req)
        const res = await axios.get(`${API_URL}/auth/admin/showAllAccount`, req)
        return res.data;
    } catch (err) {
        console.log(err.message)
    }
}








