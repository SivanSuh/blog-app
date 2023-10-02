"use client";

import BlogDetail from "@/src/components/BlogDetail";
import OtherCard from "@/src/components/OtherCard";
import { getSelectBlog } from "@/src/store/slices/blogSlice";
import { AppDispatch, RootState } from "@/src/store/store";
import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import Style from "./style.module.css";
import Link from "next/link";
import Loading from "@/src/components/Loading";
import { FcSettings } from "react-icons/fc";

interface BlogProps {
  params: any;
}

const BlogDetailPage: React.FC<BlogProps> = ({ params }) => {
  const { selectBlog, allBlog } = useSelector((state: RootState) => state.blog);
  const { formData } = useSelector((state: RootState) => state.auth);

  const dispatch = AppDispatch();

  useEffect(() => {
    dispatch(getSelectBlog(params.id));
    return () => {};
  }, []);
  const userOtherBlog = allBlog.filter(
    (item) => item.user._id === selectBlog?.user?._id
  );
  const editBlog = formData?._id === selectBlog?.user?._id;
  console.log("edit blog", editBlog);
  return (
    <div className={Style.wrapper}>
      <Link href="/">Back</Link>
      <div className={Style.settingContainer}>
        <Suspense fallback={<Loading />}>
          <BlogDetail select={selectBlog} />
        </Suspense>
        <div>{editBlog ? <FcSettings size={30} /> : null}</div>
      </div>
      <h2>
        <b>Diğer Makaleler</b>
      </h2>
      <div className={Style.otherBlogs}>
        <Suspense fallback={<Loading />}>
          {userOtherBlog.map((item) => (
            <OtherCard select={item} key={item._id} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default BlogDetailPage;
