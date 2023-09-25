export default interface AllBlogsModel {
    _id: string
    title: string
    description: string
    image: string
    user: User
}
  
  export interface User {
    _id: string
    userName: string
    email: string
    password: string
    image: string
    createdAt: string
    updatedAt: string
    __v: number
  }