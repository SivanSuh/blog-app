"use client";

import BlogDetail from "@/src/components/BlogDetail";
import OtherCard from "@/src/components/OtherCard";
import { getSelectBlog } from "@/src/store/slices/blogSlice";
import { AppDispatch, RootState } from "@/src/store/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Style from "./style.module.css";

interface BlogProps {
  params: any;
}

const BlogDetailPage: React.FC<BlogProps> = ({ params }) => {
  console.log("params", params.id);
  const { selectBlog, allBlog } = useSelector((state: RootState) => state.blog);

  const dispatch = AppDispatch();

  useEffect(() => {
    dispatch(getSelectBlog(params.id));
  }, []);
  console.log("select ", selectBlog);
  const userOtherBlog = allBlog.filter(
    (item) => item.user._id === selectBlog?.user?._id
  );
  console.log("detail", userOtherBlog);
  return (
    <div className={Style.wrapper}>
      <BlogDetail select={selectBlog} />
      <h2>
        <b>Diğer Makaleler</b>
      </h2>
      {userOtherBlog.map((item) => (
        <OtherCard select={item} key={item._id} />
      ))}
    </div>
  );
};

export default BlogDetailPage;
