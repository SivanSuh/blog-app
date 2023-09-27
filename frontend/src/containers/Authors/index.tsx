import BlogUser from "@/src/components/BlogUser";
import React from "react";

const AuthorPage = ({ params }: any) => {
  console.log("params blog user", params.id);
  return (
    <div>
      <BlogUser detail={params.id} />
    </div>
  );
};

export default AuthorPage;
