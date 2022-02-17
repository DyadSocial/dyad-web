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

const required = value => {
  if (!value) {
    return (
      <div >
        Field cannot be empty.
      </div>
    );
  }
};

const userlength = value => {
  if(value.length > 20){
    return(
      <div>
        User too long.
      </div>
    );
  }
  else if(value.length>0 && value.length < 3){
    return(
      <div>
        User too short.
      </div>
    );
  }
  else{
    return(
      <div></div>
    );
  }
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[message, setMessage] = useState("");
  const router = useRouter()

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  

  const handleLogin= (e) => {
    e.preventDefault();
    setMessage("");
    form.current.validateAll();
    //Do something when no error, this case we try to validate.
      AuthService.login(username, password).then(
        (response) => {
          setMessage("Successful. Logging in.")
          goToAccount()
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
        }
      );

  };

  const goToAccount = async () => {
    await delay(5000);
    router.push("/account");
  }

  return (
      <div className={styles["about-wrapper"]}>
        <center>
          <h1 className={styles["page-title"]}>Dyad - Login</h1>
        </center>
        <div className={styles["login-wrapper"]}>
          <div className={styles["login-body"]}>
          <div>
            <img
              src={require("../public/assets/user.png")}
              alt="a user icon"
            />
          </div>
            <Form
              onSubmit={handleLogin}
              ref={form} 
            >
              {/*See above const form = useRef() */}
              <div>
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, userlength]}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                />
              </div>
              <div>
                <button>
                  <span>Login</span>
                </button>
              </div>
              {message && (
                <div>
                  <div>
                    {message}
                  </div>
                </div>
              )}
            </Form>
            <br />
            <p> Not registered? Click {" "}
              <NextLink href="/register">
                <Link href="/register"> here</Link>
              </NextLink>
              .
            </p>
            <br />
            <p>
              {" "}
              <NextLink href="/about">
                <Link href="/about">About</Link>
              </NextLink>
            </p>
          </div>
        </div>
      </div>
    );
}

export default Login;

