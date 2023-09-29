import React from "react";
import BlogUserProp from "./props";

const BlogUser: React.FC<BlogUserProp> = ({ detail }) => {
  return (
    <div>
      <img src={detail?.image} alt={detail?.userName} />
      <br />
      <h3>{detail?.userName}</h3>
      <p>{detail?.email}</p>
    </div>
  );
};

export default BlogUser;
