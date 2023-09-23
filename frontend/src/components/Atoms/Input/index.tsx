"use client";

import React, { FC, useState } from "react";
import InputProps from "./props";
import Style from "./style.module.css";

const Input: FC<InputProps> = ({
  placeholder = "Enter Anythink",
  type = "text",
  register,
  errors,
  required,
  id,
  name,
}) => {
  const [hide, setHide] = useState({
    pass: "",
    show: false,
  });

  const showPassword = () => {
    setHide({
      ...hide,
      show: !hide.show,
    });
  };

  return (
    <>
      {type == "password" ? (
        <div className={Style.password}>
          <input
            className={Style.input}
            id={id}
            placeholder={placeholder}
            type={hide.show ? "text" : "password"}
            {...register(id as string, { required })}
            name={name}
          />
          <input
            type="checkbox"
            className={Style.checked}
            onClick={showPassword}
          />
        </div>
      ) : (
        <input
          className={Style.input}
          placeholder={placeholder}
          type={type}
          {...register(id as string, { required })}
          id={id}
          name={name}
        />
      )}
    </>
  );
};

export default Input;
