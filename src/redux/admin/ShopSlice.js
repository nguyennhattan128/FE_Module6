import {createSlice} from "@reduxjs/toolkit";
import {
    getShopPagination,
    searchShop,
    searchShopActive,
    getShopPaginationActive,
    enablingShop
} from "../../service/admin/shopService";

const initialState = {
    total: 0,
    listShop: [],
    reload: ''
}
const shopSlice = createSlice({
    name: 'shop',
    initialState,
    extraReducers: builder => {
        builder
            // .addCase(getShopList.fulfilled, (state, action) => {
            //     state.listShop = action.payload;
            // })
            .addCase(searchShop.fulfilled, (state, action) => {
                state.listShop = action.payload;
            })
            .addCase(searchShopActive.fulfilled, (state, action) => {
                state.listShop = action.payload;
            })
            .addCase(getShopPagination.fulfilled,(state, action) => {
                state.listShop = action.payload.paginationShop
                state.total = action.payload.total
            })
            .addCase(getShopPaginationActive.fulfilled,(state, action) => {
                state.listShop = action.payload.paginationShop
                state.total = action.payload.total
            })
            .addCase(enablingShop.fulfilled,(state, action) => {
                state.reload = action.payload
            })
    }
})

export default shopSlice.reducer;