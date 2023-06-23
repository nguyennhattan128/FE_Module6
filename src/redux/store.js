import {configureStore} from "@reduxjs/toolkit";
import storeReducer from "./store/storeSlice";
import staffReducer from "././staff/StaffSlice";
import storeTypeReducer from "./store/storeTypeSlice";
import categoryReducer from "./store/categorySlice";
import productReducer from "./product/ProductSlice";


const store = configureStore({
    reducer: {
        store: storeReducer,
        staff : staffReducer,
        storeType: storeTypeReducer,
        category: categoryReducer,
        product: productReducer
    }
})

export default store;
