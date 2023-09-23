import React from "react";
import Button from "../Atoms/Button";
import Style from "./style.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={Style.nav}>
      <Link href="/">
        <h2>
          <b>BLOG APP</b>
        </h2>
      </Link>
      <Button buttonName="Sign Up" buttonType={false} linkHref="/auth/login" />
    </nav>
  );
};

export default Navbar;
