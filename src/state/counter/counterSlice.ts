/**
 * author : Sudeera Madushan
 * date : 1/27/2024
 * project : food-delivery-system
 */
import {createSlice} from "@reduxjs/toolkit";

interface CounterState{
    value: number;
}
const initialState : CounterState = {
    value:0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
