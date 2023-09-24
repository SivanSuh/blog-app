"use client"

import { configureStore } from "@reduxjs/toolkit";
import {  useDispatch } from "react-redux";
import authSlice from "./slices/authSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck:false
    })
})


export type RootState = ReturnType<typeof store.getState>
export const AppDispatch :() => typeof store.dispatch = useDispatch
