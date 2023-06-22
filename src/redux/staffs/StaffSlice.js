import {createSlice} from "@reduxjs/toolkit";
import {getAllStaffs} from "../../service/staffs/staffService"

const initialState = {
    currentUser: JSON.parse(localStorage.getItem('user'))
}

const staffSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getAllStaffs.fulfilled, (state, action) => {
                state.currentUser = action.payload;
            })
    }
})

export default staffSlice.reducer;