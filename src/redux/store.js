import {configureStore} from "@reduxjs/toolkit";
import storeReducer from "./store/storeSlice";
import staffReducer from "./staffs/StaffSlice";
import storeTypeReducer from "./store/storeTypeSlice";


const store = configureStore({
    reducer: {
        store: storeReducer,
        staffs : staffReducer,
        storeType: storeTypeReducer,
    }
})

export default store;
