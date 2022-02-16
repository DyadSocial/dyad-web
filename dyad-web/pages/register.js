// Referenced code for login logic at https://www.bezkoder.com/react-jwt-auth/
import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import styles from "../styles/Login.module.css";
import { useRouter } from 'next/router'

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

const Register = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
    const onChangeNumber = (e) => {
      const phoneNumber = e.target.value;
      setPhoneNumber(phoneNumber);
    };
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
    const handleRegister = (e) => {
      e.preventDefault();
      setMessage("");
      setSuccessful(false);
      form.current.validateAll();
      if (checkBtn.current.context._errors.length === 0) {
        AuthService.register(username, phoneNumber, password).then(
          (response) => {
            setMessage(response.data.message);
            setSuccessful(true);
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            setMessage(resMessage);
            setSuccessful(false);
          }
        );
      }
    };
    return (
      <div className={styles["about-wrapper"]}>
          <center>
          <h1 className={styles["page-title"]}>Dyad - Register</h1>
        </center>
        <div className={styles["login-wrapper"]}>
         
          <div className={styles["login-body"]}>
              <h2>Fill out the areas below to register for Dyad.</h2>
              <Form onSubmit={handleRegister} ref={form}>
                {!successful && (
                  <div>
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
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <Input
                        type="text"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={onChangeNumber}
                        validations={[required]}
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
                      <button>Sign Up</button>
                    </div>
                  </div>
                )}
                {message && (
                  <div>
                    <div
                    >
                      {message}
                    </div>
                  </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
              </Form>
          </div>
        </div>
      </div>
    );
  };
  export default Register;