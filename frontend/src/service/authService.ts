import AddBlogModel from "../modelTypes/AddBlogModel"
import AllBlogsModel from "../modelTypes/AllBlogsModel"
import LoginModel from "../modelTypes/LoginModel"
import RegisterModel from "../modelTypes/RegisterModel"
import { api } from "./api"

const loginService = async (data:LoginModel) => {
    return api({
        url:"/auth/login",
        method:"POST",
        data
    })
}
const registerService = async (data:RegisterModel) => {
    return api({
        url:"/auth/register",
        method:"POST",
        data
    })
}

const addNewBlog = async (data:AddBlogModel) => {
    return api({
        url:"/blog/addBlog",
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
const authService = {
    loginService,
    registerService,
    addNewBlog,
    getAllBlogs
}
export default authService