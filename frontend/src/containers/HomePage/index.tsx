"use client";

import Button from "@/src/components/Atoms/Button";
import SelectBox from "@/src/components/Atoms/SelectBox";
import Blog from "@/src/components/Blog";
import { useState } from "react";

const HomePage = () => {
  const data = [
    {
      id: 0,
      name: "Sivan",
    },
    {
      id: 1,
      name: "roj",
    },
    {
      id: 2,
      name: "nupi",
    },
    {
      id: 3,
      name: "emek",
    },
  ];
  const [select, setSelect] = useState(data[0].name);
  return (
    <>
      <Button
        buttonName="Create Blog"
        linkHref="/createBlog"
        buttonType={false}
      />
      {/* <SelectBox
        value={select}
        data={data}
        onChange={(e) => setSelect(e.target.value)}
      />
      {select} */}
      <br />
      <br />
      <Blog />
    </>
  );
};

export default HomePage;
