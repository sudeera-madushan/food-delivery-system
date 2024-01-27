/**
 * author : Sudeera Madushan
 * date : 1/27/2024
 * project : food-delivery-system
 */
import {configureStore, ConfigureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice.ts"
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
