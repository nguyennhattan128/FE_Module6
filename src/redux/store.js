import {configureStore} from "@reduxjs/toolkit";
import storeReducer from "./store/storeSlice";
import staffReducer from "./staffs/StaffSlice"


const store = configureStore({
    reducer: {
       store: storeReducer,
        staffs : staffReducer
    }
})

export default store;
