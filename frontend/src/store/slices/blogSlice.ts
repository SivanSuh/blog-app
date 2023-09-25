import AddBlogModel from "@/src/modelTypes/AddBlogModel";
import AllBlogsModel from "@/src/modelTypes/AllBlogsModel";
import authService from "@/src/service/authService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addBlog = createAsyncThunk("new-blog", async (body:AddBlogModel,{rejectWithValue}) => {
   try {
    const response = await authService.addNewBlog(body);
    return response;
   } catch (error) {
    return rejectWithValue(error)
   }
})

export const getBlogs = createAsyncThunk("get-blog",async () => {
    try {
        const response = await authService.getAllBlogs();
        return response
    } catch (error) {
        return (error)
    }
})

interface AddModel {
    allBlog:AddBlogModel[]
    errors:boolean
}
const initialState:AddModel= {
    allBlog:[],
    errors:false
}

const blogSlice = createSlice({
    name:"blog",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(addBlog.fulfilled,(state,action) => {
            state.allBlog.push(action.payload as any)
        })
        builder.addCase(addBlog.rejected,(state,action) => {
            state.errors = true
        })

        // get blogs
        builder.addCase(getBlogs.fulfilled,(state,action) => {
            state.allBlog = action.payload?.data
        })
    }
})

export default blogSlice.reducer