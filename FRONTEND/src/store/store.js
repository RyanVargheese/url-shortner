import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/authSlice.js'

export const store=configureStore({
    //inside reducer all the key becomes a field in the store's root state
    reducer:{
        auth:authReducer
    },
});

export default store;