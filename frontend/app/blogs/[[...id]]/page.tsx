import BlogDetailPage from "@/src/containers/BlogDetailPage";
import React from "react";

export default async function ({ params }: any) {
  console.log("params", params);
  return (
    <div>
      <BlogDetailPage params={params} />
    </div>
  );
}
