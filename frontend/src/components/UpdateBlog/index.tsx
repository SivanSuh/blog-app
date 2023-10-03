"use client";
import React, { useState } from "react";
import Input from "../Atoms/Input";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/store/store";
import { FieldValues, useForm } from "react-hook-form";
import FileUpload from "../FileUpload";
import Button from "../Atoms/Button";
import Style from "./style.module.css";
import { useRouter } from "next/navigation";
import { selectBlogUpdate } from "@/src/store/slices/blogSlice";

const UpdateBlog = () => {
  const { formData } = useSelector((state: RootState) => state.auth);
  const { selectBlog } = useSelector((state: RootState) => state.blog);
  const { register, handleSubmit } = useForm<FieldValues>();
  const [selectedFile, setSelectedFile] = useState<null | any | File>(null);
  const dispatch = AppDispatch();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const { description, title } = data;
    const newFormData = new FormData();

    newFormData.append("title", title);
    newFormData.append("description", description);
    newFormData.append("image", selectedFile);
    newFormData.append("userInfo", formData?._id);

    await dispatch(
      selectBlogUpdate({ id: selectBlog?._id, body: newFormData })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={Style.form}>
      <Input
        register={register}
        name="title"
        placeholder={selectBlog?.title}
        id="title"
        type="text"
        // value={selectBlog?.title}
      />
      <FileUpload
        register={register}
        title="Resim Ekleyiniz"
        id="image"
        name="image"
        setSelectedFile={setSelectedFile}
      />
      <Input
        placeholder={selectBlog?.description}
        name="description"
        register={register}
        type="text"
        //value={selectBlog?.description}
        id="description"
      />
      <Button buttonName="Update Blog" type="submit" />
    </form>
  );
};

export default UpdateBlog;
