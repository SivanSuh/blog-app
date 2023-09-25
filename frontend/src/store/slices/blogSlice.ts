import AddBlogModel from "@/src/modelTypes/AddBlogModel";
import AllBlogsModel from "@/src/modelTypes/AllBlogsModel";
import blogService from "@/src/service/blogService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addBlog = createAsyncThunk("new-blog", async (body:AddBlogModel,{rejectWithValue}) => {
   try {
    const response = await blogService.addNewBlog(body);
    return response;
   } catch (error) {
    return rejectWithValue(error)
   }
})

export const getBlogs = createAsyncThunk("get-blog",async () => {
    try {
        const response = await blogService.getAllBlogs();
        return response
    } catch (error) {
        return (error)
    }
})

export const getSelectBlog = createAsyncThunk("get-select-blog",async (id:string) => {
    try {
        const response = await blogService.selectBlogs(id)
        return response
    } catch (error) {
        console.log(error)
    }
})

interface AddModel {
    allBlog:AllBlogsModel[]
    errors:boolean
    selectBlog:Object
}
const initialState:AddModel= {
    allBlog:[],
    errors:false,
    selectBlog:{}
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

        builder.addCase(getSelectBlog.fulfilled,(state,action) => {
            state.selectBlog = action.payload?.data
        })
        builder.addCase(getSelectBlog.rejected,(state,action) => {
            state.errors = true
        })
    }
})

export default blogSlice.reducer