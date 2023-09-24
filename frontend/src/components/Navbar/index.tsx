import React from "react";
import Button from "../Atoms/Button";
import Style from "./style.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";

const Navbar = () => {
  const { formData } = useSelector((state: RootState) => state.auth);

  return (
    <nav className={Style.nav}>
      <Link href="/">
        <h2>
          <b>BLOG APP</b>
        </h2>
      </Link>
      <div>
        <span className={Style.userName}>{formData?.userName}</span>
        <Button
          buttonName="Sign Up"
          buttonType={false}
          linkHref="/auth/login"
        />
      </div>
    </nav>
  );
};

export default Navbar;
