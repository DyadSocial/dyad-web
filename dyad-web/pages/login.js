// Referenced code for login logic at https://www.bezkoder.com/react-jwt-auth/
import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import AuthService from "../services/auth.service";
import styles from "../styles/Login.module.css";
import { useRouter, withRouter } from 'next/router'
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { Loading } from 'react-loading-dot';

const required = value => {
  if (!value) {
    return (
      <div className={styles["form-error"]} >
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
  else if(value.length>0 && value.length < 4){
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

export default function Login(){
  const form = useRef();
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    form.current.validateAll();
    //Do something when no error, this case we try to validate.
      AuthService.login(username, password).then(
        (response) => {
          setMessage("Successful. Logging in.")
          localStorage.setItem("username", username);
          goToAccount()
        },
        (error) => {
          console.log(error.message);
          const resMessage =
            "Incorrect username or password." ||
            error.toString();
          setMessage(resMessage);
          setLoading(false);
        }
      );

  };

  const goToAccount = async () => {
    await delay(2000);
    router.push({
      pathname: '/account',
      query: { name: username }
    });
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
                <Input
                  className={styles["login-form"]}
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  onFocusOut={() => alert("hi")}
                  validations={[required]}
                />
              </div>
              <div>
                <Input
                  className={styles["login-form"]}
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                />
              </div>
              <div>
                {loading ? <Loading background="grey"/> :
                <button className={styles["login-submit"]}>
                  Login
                </button>}
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



