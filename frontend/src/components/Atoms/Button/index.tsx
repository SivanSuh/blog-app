import React, { FC } from "react";
import ButtonProps from "./props";
import Style from "./style.module.css";

const Button: FC<ButtonProps> = ({ buttonName = "buton", type = "button" }) => {
  return (
    <>
      <button type={type} className={Style.button}>
        {buttonName}
      </button>
    </>
  );
};

export default Button;
