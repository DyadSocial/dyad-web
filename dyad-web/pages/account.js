// Referenced code for login logic at https://www.bezkoder.com/react-jwt-auth/
import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import styles from "../styles/Login.module.css";
import { useRouter } from 'next/router'
import Link from "@mui/material/Link";
import NextLink from "next/link";

const delay = ms => new Promise(res => setTimeout(res, ms));

const Account = (props) => {
  const form = useRef();
  const router = useRouter()

  const handleLogout= (e) => {
    e.preventDefault();
    AuthService.logout();
    goToLogin();
  };

  const goToLogin = async () => {
    await delay(2000);
    router.push("/login");
  }

  return (
      <div className={styles["about-wrapper"]}>
        <center>
          <h1 className={styles["page-title"]}>Dyad - Login</h1>
        </center>
        <center>
          <button onClick={handleLogout}>Logout</button>
        </center>
      </div>
    );
}

export default Account;

