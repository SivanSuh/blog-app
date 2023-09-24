"use client"

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import LoginModel from "@/src/modelTypes/LoginModel";
import RegisterModel from "@/src/modelTypes/RegisterModel";
import authService from "@/src/service/authService";
import cookies from "js-cookie"

export const login = createAsyncThunk("login", async (body:LoginModel,{rejectWithValue}) => {
    try {
        const response = await authService.loginService(body);
        cookies.set("login",JSON.stringify(body))
        return response
    } catch (error:any) {
        return rejectWithValue(error?.response?.data?.hata)
    }
})

export const registerRequest = createAsyncThunk("register",async (body:RegisterModel, {rejectWithValue}) => {
    try {
        const response = await authService.registerService(body)
        cookies.set("login",JSON.stringify(body))
        return response
    } catch (error:any) {
        console.log("errr",error)
       return rejectWithValue(error?.response?.data?.hata)
    }
} )

interface AuthProps {
    formData:RegisterModel | null | unknown
    loading:boolean
    error:any
    isLoggin:boolean
}
const initialState:AuthProps = {
    formData:null,
    loading:false,
    isLoggin:false,
    error:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state) => {
          
            cookies.remove("login");
            state.formData = null;
        }
    },
    extraReducers:(builder) => {
        builder.addCase(login.fulfilled,(state,action) => {
            //state.isLoggin = true
            state.formData = action.payload?.data
            console.log("form daraasadas",state.formData)
            //cookies.set("login",JSON.stringify(action.payload.data))
        })
        builder.addCase(login.pending,(state,action) => {
            state.loading = true
        })
        builder.addCase(login.rejected, (state,action) => {
            state.isLoggin = false
            state.error = action?.payload
            state.formData =action.payload
        })

        // register process
        builder.addCase(registerRequest.fulfilled,(state,action) =>{
            state.formData = action.payload?.data
        })
        builder.addCase(registerRequest.pending,(state,action) => {
            state.loading = true
        })
        builder.addCase(registerRequest.rejected, (state,action) => {
            state.isLoggin = false
            state.error = action?.payload
            //state.formData =action.payload
        })
    }
})

export const {  logout }  = authSlice.actions
export default authSlice.reducer