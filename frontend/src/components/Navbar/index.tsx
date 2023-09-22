import React from "react";
import Button from "../Atoms/Button";
import Style from "./style.module.css";

const Navbar = () => {
  return (
    <nav className={Style.nav}>
      <h2>
        <b>BLOG APP</b>
      </h2>
      <Button buttonName="Sign Up" />
    </nav>
  );
};

export default Navbar;
