import axios from "axios";
const API_URL = "http://localhost:3001";

export const getCategories = async () => {
    try {
        const res = await axios.get(`${API_URL}/products/allCategories`)
        return res.data;
    } catch (err) {
        throw new err;
    }
}