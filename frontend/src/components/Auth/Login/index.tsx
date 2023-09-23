"use client";

import Link from "next/link";
import Button from "@/src/components/Atoms/Button";
import Input from "../../Atoms/Input";
import Style from "./style.module.css";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { RootState, useAppDispatch } from "@/src/store/store";
import { login } from "@/src/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const Login = () => {
  const { error } = useSelector((state: RootState) => state.auth);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    await dispatch(login(data))
      .unwrap()
      .then(() => router.push("/"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={Style.main}>
      <h2 className={Style.title}>Login Page</h2>
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
      <p className={Style.link}>
        <Link href="/auth/register">Do you not have account?</Link>
      </p>
      <Button buttonName="Submit" type="submit" />

      {error && <h2 className={Style.errors}>{error}</h2>}
    </form>
  );
};

export default Login;
