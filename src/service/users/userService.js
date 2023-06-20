import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

const API_URL = "http://localhost:3001"


export const register = createAsyncThunk(
    'user/register',
    async (user) => {
        const res = await axios.post('http://localhost:3001/user/register', user);
        return res.data;
    })

export const login = createAsyncThunk(
    'user/register',
    async (user) => {
        try {
            const res = await axios.post(`${API_URL}/auth/login`, user)
            return res.data
        } catch (err) {
            console.log(err.message)
        }
    })

