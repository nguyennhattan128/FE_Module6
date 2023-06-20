import {configureStore} from "@reduxjs/toolkit";
import storeReducer from "./store/storeSlice";
import userReducer from "./user/userSlice"
import storeTypeReducer from "./store/storeTypeSlice"

const store = configureStore({
    reducer: {
        store: storeReducer,
        user: userReducer,
        storeType: storeTypeReducer
    }
})

export default store;