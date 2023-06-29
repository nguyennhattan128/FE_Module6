import {configureStore} from "@reduxjs/toolkit";
import storeReducer from "./store/storeSlice";
import staffReducer from "././staff/StaffSlice";
import storeTypeReducer from "./store/storeTypeSlice";
import categoryReducer from "./store/categorySlice";
import productReducer from "./product/ProductSlice";
import userReducer from "./user/userSlice";
import orderReducer from "./order/OrderSlice"
import shopReducer from "./admin/ShopSlice"


const store = configureStore({
    reducer: {
        shop: shopReducer,
        store: storeReducer,
        staff : staffReducer,
        storeType: storeTypeReducer,
        category: categoryReducer,
        //Dùng cho các role chung
        user: userReducer,
        product: productReducer,
        order: orderReducer,
    }
})

export default store;
