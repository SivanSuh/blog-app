import React from "react";
import BlogUserProp from "./props";

const BlogUser: React.FC<BlogUserProp> = ({ detail }) => {
  console.log("detail", detail);
  return (
    <div>
      <h3>{detail}</h3>
    </div>
  );
};

export default BlogUser;
