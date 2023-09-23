import React from "react";
import Style from "./style.module.css";
import Input from "../../Atoms/Input";
import Link from "next/link";
import Button from "../../Atoms/Button";

const Register = () => {
  return (
    <main className={Style.main}>
      <h2 className={Style.title}>Register Page</h2>
      <Input placeholder="UserName" type="text" />
      <Input placeholder="email" type="email" />
      <Input placeholder="password" type="password" />
      <Input placeholder="Confirm Password" type="password" />
      <p className={Style.link}>
        <Link href="/auth/login">Do you have account?</Link>
      </p>
      <Button buttonName="Submit" />
    </main>
  );
};

export default Register;
