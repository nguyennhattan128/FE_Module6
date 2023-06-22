import axios from "axios";
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

