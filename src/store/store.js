import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from './serviceSlice'

const store = configureStore({
    reducer:  serviceReducer,
})

export default store;