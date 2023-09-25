import BlogDetailPage from "@/src/containers/BlogDetailPage";
import React from "react";

interface BlogDetailProp {
  params: any;
}

export default async function ({ params }: any) {
  console.log("params", params);
  return (
    <div>
      <BlogDetailPage params={params} />
    </div>
  );
}
