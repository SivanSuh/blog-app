import React from "react";
import Button from "../Atoms/Button";
import Style from "./style.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/store/store";
import { logout } from "@/src/store/slices/authSlice";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { formData } = useSelector((state: RootState) => state.auth);

  const dispatch = AppDispatch();
  const router = useRouter();
  return (
    <nav className={Style.nav}>
      <Link href="/">
        <h2>
          <b>BLOG APP</b>
        </h2>
      </Link>

      <div>
        <Link href="/profile">
          <span className={Style.userName}>{formData?.userName}</span>
        </Link>
        {formData?.userName ? (
          <Button
            buttonName="Logout"
            onClick={() => {
              dispatch(logout());
              router.push("/auth/login");
            }}
          />
        ) : (
          <Button
            buttonName="Sign Up"
            buttonType={false}
            linkHref="/auth/login"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
