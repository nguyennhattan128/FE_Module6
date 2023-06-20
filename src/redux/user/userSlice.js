import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../service/users/userService";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user'))
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        })
    }
})

export default userSlice.reducer;