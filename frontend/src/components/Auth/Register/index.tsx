"use client";

import React from "react";
import Style from "./style.module.css";
import Input from "../../Atoms/Input";
import Link from "next/link";
import Button from "../../Atoms/Button";
import { AppDispatch } from "@/src/store/store";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const Register = () => {
  const dispatch = AppDispatch();
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    console.log("data", data);
  };
  return (
    <main className={Style.main}>
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
    </main>
  );
};

export default Register;
