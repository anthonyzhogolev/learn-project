import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { CounterReducer } from 'entities/Counter';

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
    preloadedState: initialState,
    reducer: {
        counter: CounterReducer
    },
    devTools: __IS_DEV__
})