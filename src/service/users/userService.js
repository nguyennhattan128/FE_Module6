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
        console.log(err)
    }
}


export const updateUserInformation = createAsyncThunk(
    'user/updateUserInfo',
    async (values) => {
        try {
            const {token, idStore, ...updateUserDatabase} = values;
            await customAPI().put(`account/update-account`, updateUserDatabase);
            return values;
        } catch (error) {
            throw error;
        }
    }
);