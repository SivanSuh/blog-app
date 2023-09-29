"use client";

import React, { useEffect } from "react";
import Style from "./style.module.css";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/store/store";
import { getBlogs } from "@/src/store/slices/blogSlice";
import Link from "next/link";
import WordLength from "@/src/utils/WordLength";

const Blog = () => {
  const { allBlog } = useSelector((state: RootState) => state.blog);
  const dispatch = AppDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  return (
    <>
      {allBlog?.map((item) => {
        return (
          <main className={Style.wrapper} key={item.title}>
            <Link href={`/blogs/${item?._id}`}>
              <div className={Style.user}>
                <img
                  className={Style.userImage}
                  src={item.user?.image}
                  alt={item.title}
                />

                <span>{item?.user?.userName}</span>
              </div>
              <div className={Style.main}>
                <div className={Style.description}>
                  <h2 className={Style.title}>{item.title}</h2>
                  <p>{WordLength(item.description)}</p>
                </div>
                <div>
                  <img
                    className={Style.img}
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${item.image}`}
                    alt={item.title}
                  />
                </div>
              </div>
            </Link>
          </main>
        );
      })}
    </>
  );
};

export default Blog;
