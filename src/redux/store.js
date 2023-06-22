import {configureStore} from "@reduxjs/toolkit";
import storeReducer from "./store/storeSlice";
import staffReducer from "././staff/StaffSlice";
import storeTypeReducer from "./store/storeTypeSlice";
import categoryReducer from "./store/categorySlice";


const store = configureStore({
    reducer: {
        store: storeReducer,
        staff : staffReducer,
        storeType: storeTypeReducer,
        category: categoryReducer
    }
})

export default store;
