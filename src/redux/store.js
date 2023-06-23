import {configureStore} from "@reduxjs/toolkit";
import storeReducer from "./store/storeSlice";
import staffReducer from "././staff/StaffSlice";
import storeTypeReducer from "./store/storeTypeSlice";
import categoryReducer from "./store/categorySlice";
import productReducer from "./product/ProductSlice";
import userReducer from "./user/userSlice"


const store = configureStore({
    reducer: {
        store: storeReducer,
        staff : staffReducer,
        storeType: storeTypeReducer,
        category: categoryReducer,
        //Dùng cho các role chung
        user: userReducer,
        product: productReducer
    }
})

export default store;
