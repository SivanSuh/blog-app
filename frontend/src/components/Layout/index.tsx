"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import LayoutProps from "./props";
import Footer from "../Footer";
import Style from "./style.module.css";
import Cookies from "js-cookie";
import { AppDispatch } from "@/src/store/store";
import { useRouter } from "next/navigation";
import { login } from "@/src/store/slices/authSlice";
import LoginPage from "@/src/containers/Auth/LoginPage";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [logins, setLogin] = useState(false);
  const refreshCookie = Cookies.get("login");
  const dispatch = AppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (refreshCookie) {
      setLogin(true);
      dispatch(login(JSON.parse(refreshCookie)));
    } else {
      setLogin(false);
      router.push("/auth/login");
    }
  });
  return (
    <main className={Style.layout}>
      <Navbar />
      {logins ? (
        <>
          <div>{children}</div>
        </>
      ) : (
        <LoginPage />
      )}
      <Footer />
    </main>
  );
};

export default Layout;
