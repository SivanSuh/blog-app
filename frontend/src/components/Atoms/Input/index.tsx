import React, { FC } from "react";
import InputProps from "./props";
import Style from "./style.module.css";

const Input: FC<InputProps> = ({
  placeholder = "Enter Anythink",
  type = "text",
}) => {
  return (
    <input className={Style.input} placeholder={placeholder} type={type} />
  );
};

export default Input;
