"use client";

import React, { useEffect } from "react";
import Style from "./style.module.css";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/store/store";
import { getBlogs } from "@/src/store/slices/blogSlice";

const Blog = () => {
  const { allBlog } = useSelector((state: RootState) => state.blog);
  console.log("all blogs", allBlog);
  const dispatch = AppDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return (
    <main className={Style.wrapper}>
      {allBlog.map((item) => (
        <>
          <div className={Style.user}>
            <img
              className={Style.userImage}
              src={item.image}
              alt={item.title}
            />
            <span>{item.userInfo}</span>
          </div>
          <div className={Style.main}>
            <div className={Style.description}>
              <h2 className={Style.title}>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div>
              <img className={Style.img} src={item.image} alt={item.title} />
            </div>
          </div>
        </>
      ))}
    </main>
  );
};

export default Blog;
