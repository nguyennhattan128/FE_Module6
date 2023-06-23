import {createSlice} from "@reduxjs/toolkit";
import {updateUserInformation} from "../../service/users/userService";


const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user'))
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        //Hàm update thông tin các nhân này dành cho tất cả các role: user, staff
        builder.addCase(updateUserInformation.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        })
    }
})

export default userSlice.reducer;





