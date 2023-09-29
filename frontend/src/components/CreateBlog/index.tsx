import React, { useState } from "react";
import Input from "../Atoms/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/store/store";
import Style from "./style.module.css";
import Button from "../Atoms/Button";
import { addBlog } from "@/src/store/slices/blogSlice";
import FileUpload from "../FileUpload";
import { useRouter } from "next/navigation";

const CreateBlog = () => {
  const { formData } = useSelector((state: RootState) => state.auth);
  const { register, handleSubmit } = useForm<FieldValues>();
  const dispatch = AppDispatch();
  const router = useRouter();

  const [selectedFile, setSelectedFile] = useState<null | any | File>(null);

  const onSubmit = async (data: any) => {
    const { description, title } = data;
    const newFormData = new FormData();

    newFormData.append("title", title);
    newFormData.append("description", description);
    newFormData.append("image", selectedFile);
    newFormData.append("user", formData?._id);

    await dispatch(addBlog(newFormData as any));

    console.log("data", newFormData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={Style.form}>
      <Input
        placeholder="title"
        name="title"
        id="title"
        register={register}
        type="text"
      />
      <FileUpload
        register={register}
        title="Resim Ekleyiniz"
        id="image"
        name="image"
        setSelectedFile={setSelectedFile}
      />
      <Input
        placeholder="description"
        name="description"
        register={register}
        type="text"
        id="description"
      />
      <Button buttonName="Create Blog" type="submit" />
    </form>
  );
};

export default CreateBlog;
