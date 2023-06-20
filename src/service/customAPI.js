import axios from "axios";

const getUserToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? user.token : null;
}

const customAPI = () => axios.create({
    baseURL: 'http://localhost:3001/',
    headers: {
        Authorization: `Bearer ${getUserToken()}`
    }
});

export default customAPI;