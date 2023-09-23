import Link from "next/link";
import Button from "../../Atoms/Button";
import Input from "../../Atoms/Input";
import Style from "./style.module.css";

const Login = () => {
  return (
    <main className={Style.main}>
      <h2 className={Style.title}>Login Page</h2>
      <Input placeholder="email" type="email" />
      <Input placeholder="password" type="password" />
      <p className={Style.link}>
        <Link href="/auth/register">Do you not have account?</Link>
      </p>
      <Button buttonName="Submit" />
    </main>
  );
};

export default Login;
