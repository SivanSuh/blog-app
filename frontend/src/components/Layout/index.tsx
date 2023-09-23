import React from "react";
import Navbar from "../Navbar";
import LayoutProps from "./props";
import Footer from "../Footer";
import Style from "./style.module.css";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className={Style.layout}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
