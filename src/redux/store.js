import {configureStore} from "@reduxjs/toolkit";
import storeReducer from "./store/storeSlice";


const store = configureStore({
    reducer: {
       store: storeReducer,
    }
})

export default store;
import staffReducer from "./staffs/StaffSlice"


const store = configureStore({
    reducer : {
        staffs : staffReducer
    }
})
export default store