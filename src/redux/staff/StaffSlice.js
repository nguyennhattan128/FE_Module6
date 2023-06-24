import {createSlice} from "@reduxjs/toolkit";
import {getStaffList, getStaffPagination, searchStaff} from "../../service/staff/staffService";
import listStaff from "../../pages/staff/ListStaff";

const initialState = {
    total: 0,
    listStaff: []
}
const staffSlice = createSlice({
    name: 'staff',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getStaffList.fulfilled, (state, action) => {
                state.listStaff = action.payload;
            })
            .addCase(searchStaff.fulfilled, (state, action) => {
                state.listStaff = action.payload;
            })
            .addCase(getStaffPagination.fulfilled,(state, action) => {
                console.log('state:',state)
                console.log('state.listStaff',state.listStaff)
                console.log('action:',action.payload)
                state.listStaff = action.payload.paginationStaff
                state.total = action.payload.total
            })
    }
})

export default staffSlice.reducer;