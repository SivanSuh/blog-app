import React from "react";
import BlogDetailProps from "./props";
import Style from "./style.module.css";

const BlogDetail: React.FC<BlogDetailProps> = ({ select }) => {
  return (
    <div>
      <h2 className={Style.title}>{select?.title}</h2>
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/${select?.image}`}
        alt={select?.title}
        className={Style.image}
      />
      <p className={Style.description}>{select?.description}</p>
      <br />
      <img
        className={Style.userImage}
        src={select?.user?.image}
        alt={select?.user?.userName}
      />
      <h3>{select?.user?.userName}</h3>
    </div>
  );
};

export default BlogDetail;
