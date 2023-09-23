import React, { FC } from "react";
import ButtonProps from "./props";
import Style from "./style.module.css";
import Link from "next/link";

const Button: FC<ButtonProps> = ({
  buttonName = "buton",
  type = "button",
  buttonType = true,
  linkHref,
}) => {
  return (
    <>
      {buttonType ? (
        <button type={type} className={Style.button}>
          {buttonName}
        </button>
      ) : (
        <Link href={linkHref as string} className={Style.button}>
          {buttonName}
        </Link>
      )}
    </>
  );
};

export default Button;
