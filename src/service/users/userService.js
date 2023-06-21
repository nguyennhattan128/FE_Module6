import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";



export const register = createAsyncThunk(
    'user/register',
    async (user) => {
        console.log(user)
        const res = await axios.post('http://localhost:3001/user/register', user);
        return res.data;
    })

export const login = createAsyncThunk(
    'user/login',
    async (user) => {
        const res = await axios.post('http://localhost:3001/user/login', user);
        return res.data;
    })