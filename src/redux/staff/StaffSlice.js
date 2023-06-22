import {createSlice} from "@reduxjs/toolkit";
import {getStaffList} from "../../service/staff/staffService";

const initialState = {
    listStaff: []
}
const staffSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getStaffList.fulfilled, (state, action) => {
                state.listStaff = action.payload;
            })
    }
})

export default staffSlice.reducer;