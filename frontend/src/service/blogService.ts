import AddBlogModel from "../modelTypes/AddBlogModel"
import { api } from "./api"

const addNewBlog = async (data:AddBlogModel) => {
    return api({
        url:"/blog/addBlog",
        headers: {
            "Content-Type": "multipart/form-data",
          },
        method:"POST",
        data
    })
}

const getAllBlogs = async () => {
    return api({
        url:"/blog/allBlog",
        method:"GET",
    })
}

const selectBlogs = async (id:string) => {
    return api({
        url:`/blog/allBlog/${id}`,
        method:"POST"
    })
}

const blogService = {
    addNewBlog,
    getAllBlogs,
    selectBlogs
}

export default blogService