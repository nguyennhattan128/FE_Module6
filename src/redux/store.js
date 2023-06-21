import {configureStore} from "@reduxjs/toolkit";
import staffReducer from "./staffs/StaffSlice"


const store = configureStore({
    reducer : {
        staffs : staffReducer
    }
})
export default store