import React from "react";
import Input from "../Atoms/Input";
import { useForm } from "react-hook-form";

const CreateBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data: any) => {
    console.log("data", data);
  };

  return (
    <form>
      <Input placeholder="title" name="title" register={register} type="text" />
      <Input placeholder="image" name="image" register={register} type="file" />
      <Input
        placeholder="description"
        name="description"
        register={register}
        type="text"
      />
    </form>
  );
};

export default CreateBlog;
