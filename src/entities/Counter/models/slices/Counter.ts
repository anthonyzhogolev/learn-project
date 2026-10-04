import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/CounterSchema';
const initialState = { value: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++;
           
        },
        decrement(state) {
            state.value--;
            

        }

    },
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer;