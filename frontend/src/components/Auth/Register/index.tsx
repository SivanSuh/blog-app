"use client";

import React from "react";
import Style from "./style.module.css";
import Input from "../../Atoms/Input";
import Link from "next/link";
import Button from "../../Atoms/Button";
import { AppDispatch, RootState } from "@/src/store/store";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { registerRequest } from "@/src/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Register = () => {
  const dispatch = AppDispatch();
  const { error } = useSelector((state: RootState) => state.auth);
  const router = useRouter();
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    console.log("data", data);
    await dispatch(registerRequest(data)).then(() => router.push("/"));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={Style.main}>
      <h2 className={Style.title}>Register Page</h2>
      <Input
        register={register}
        name="userName"
        placeholder="UserName"
        type="text"
        id="userName"
      />
      <Input
        register={register}
        name="email"
        placeholder="email"
        type="email"
        id="email"
      />
      <Input
        register={register}
        name="password"
        placeholder="password"
        type="password"
        id="password"
      />
      {/* <Input placeholder="Confirm Password" type="password" /> */}
      <p className={Style.link}>
        <Link href="/auth/login">Do you have account?</Link>
      </p>
      <Button buttonName="Submit" />
      {error && <h2 className={Style.errors}>{error}</h2>}
    </form>
  );
};

export default Register;
