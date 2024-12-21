import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './slices/DataSlices'

export const store = configureStore({
    reducer: {
        data: dataSlice
    }
})