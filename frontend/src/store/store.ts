"use client"

import { configureStore } from "@reduxjs/toolkit";
import {  useDispatch } from "react-redux";
import authSlice from "./slices/authSlice";
import blogSlice from "./slices/blogSlice";

export const store = configureStore({
    reducer:{
        auth:authSlice,
        blog:blogSlice
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck:false
    })
})


export type RootState = ReturnType<typeof store.getState>
export const AppDispatch :() => typeof store.dispatch = useDispatch
