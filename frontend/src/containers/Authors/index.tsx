"use client";

import BlogUser from "@/src/components/BlogUser";
import { getUserInfo } from "@/src/store/slices/blogSlice";
import { AppDispatch, RootState } from "@/src/store/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AuthorPage = ({ params }: any) => {
  const { userData } = useSelector((state: RootState) => state.blog);

  const router = useRouter();
  const dispatch = AppDispatch();
  useEffect(() => {
    dispatch(getUserInfo(params?.id[0]));
  }, []);

  return (
    <div>
      <p onClick={() => router.back()} style={{ cursor: "pointer" }}>
        Back
      </p>
      <BlogUser detail={userData} />
    </div>
  );
};

export default AuthorPage;
