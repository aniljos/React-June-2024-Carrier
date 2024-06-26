import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './authReducer';
import { gadgetsReducer } from './gadgetsReducer';



const reducer = combineReducers({
    auth: authReducer,
    gadgets: gadgetsReducer
})

//store
export const store = configureStore({reducer: reducer});

export type RootState = ReturnType<typeof store.getState>; // read from the store
export type AppDispatch = typeof store.dispatch; // dispatch an action to the store