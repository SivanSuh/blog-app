import React from "react";
import BlogDetailProps from "../BlogDetail/props";
import Style from "./style.module.css";
import Link from "next/link";

const OtherCard: React.FC<BlogDetailProps> = ({ select }) => {
  return (
    <Link href={`/blogs/${select?._id}`}>
      <div className={Style.other}>
        <h3 className={Style.title}>{select.title}</h3>
        <img src={select.image} alt={select.title} className={Style.image} />
      </div>
    </Link>
  );
};

export default OtherCard;
