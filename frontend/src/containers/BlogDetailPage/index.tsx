"use client";

import BlogDetail from "@/src/components/BlogDetail";
import { getSelectBlog } from "@/src/store/slices/blogSlice";
import { AppDispatch, RootState } from "@/src/store/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

interface BlogProps {
  params: any;
}

const BlogDetailPage: React.FC<BlogProps> = ({ params }) => {
  console.log("params", params.id);
  const { selectBlog } = useSelector((state: RootState) => state.blog);

  const dispatch = AppDispatch();

  useEffect(() => {
    dispatch(getSelectBlog(params.id));
  }, []);
  console.log("select ", selectBlog);
  return (
    <>
      <BlogDetail select={selectBlog} />
      <h3>Diğer Makaleler</h3>
    </>
  );
};

export default BlogDetailPage;
