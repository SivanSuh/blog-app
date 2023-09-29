import BlogDetailPage from "@/src/containers/BlogDetailPage";
import React from "react";

export default async function ({ params }: any) {
  return (
    <div>
      <BlogDetailPage params={params} />
    </div>
  );
}
