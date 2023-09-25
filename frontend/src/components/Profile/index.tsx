"use client";

import { RootState } from "@/src/store/store";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { formData } = useSelector((state: RootState) => state.auth);
  return (
    <div>
      <img src={formData?.image} alt={formData?.userName} />
      <h3>{formData?.userName}</h3>
      <p>{formData?.email}</p>
    </div>
  );
};

export default Profile;
