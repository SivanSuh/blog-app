"use client";

import BlogDetail from "@/src/components/BlogDetail";
import OtherCard from "@/src/components/OtherCard";
import { getSelectBlog, selectDeleteBlog } from "@/src/store/slices/blogSlice";
import { AppDispatch, RootState } from "@/src/store/store";
import React, { Suspense, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Style from "./style.module.css";
import Link from "next/link";
import Loading from "@/src/components/Loading";
import { FcSettings } from "react-icons/fc";
import { AiOutlineDelete } from "react-icons/ai";
import Modal from "@/src/components/Modal";
import { useRouter } from "next/navigation";

interface BlogProps {
  params: any;
}

const BlogDetailPage: React.FC<BlogProps> = ({ params }) => {
  const { selectBlog, allBlog } = useSelector((state: RootState) => state.blog);
  const { formData } = useSelector((state: RootState) => state.auth);

  const [open, setOpen] = useState(false);
  const dispatch = AppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getSelectBlog(params.id));
    return () => {};
  }, []);
  const userOtherBlog = allBlog.filter(
    (item) => item.user._id === selectBlog?.user?._id
  );
  const editBlog = formData?._id === selectBlog?.user?._id;

  return (
    <div className={Style.wrapper}>
      <Link href="/">Back</Link>
      <div className={Style.settingContainer}>
        <Suspense fallback={<Loading />}>
          <BlogDetail select={selectBlog} />
        </Suspense>
        <div>
          {editBlog ? (
            <div className={Style.settingIcon}>
              <Link href="/updateBlog">
                <FcSettings size={30} />
              </Link>
              <div onClick={() => setOpen(true)} className={Style.deleteButton}>
                <AiOutlineDelete size={30} color={"red"} />
              </div>
            </div>
          ) : null}
        </div>
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
      <Modal
        open={open}
        close={setOpen}
        title={selectBlog?.title}
        onClick={() => {
          dispatch(selectDeleteBlog(selectBlog?._id));
          setOpen(false);
          router.push("/");
        }}
      />
    </div>
  );
};

export default BlogDetailPage;
