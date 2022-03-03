// Referenced code for login logic at https://www.bezkoder.com/react-jwt-auth/
import React, { useState, useRef, useEffect } from "react";
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

const passLength = value => {
  if(value.length > 20){
    return(
    <div>
      Password too long.
    </div>);
  }
  else if(value.length>0 && value.length < 6){
    return(
      <div>
        Password too short.
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

const Register = (props) => {
    const form = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [match, setMatch] = useState(false);
    const [created, setCreated] = useState(false);
    const router = useRouter()
    
    const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
    };
    const onChangePassword = (e) => {
      const password = e.target.value;
      passwordMatch(password, cpassword);
      setPassword(password);
    };
    const onChangeCPassword = (e) => {
      const cpassword = e.target.value;
      passwordMatch(password, cpassword);
      setCPassword(cpassword);
    };
    const handleRegister = (e) => {
      e.preventDefault();
      setMessage("");
      setSuccessful(false);
      passwordMatch(password, cpassword);
      form.current.validateAll();
      
        AuthService.register(username, password).then(
          (response) => {
            setMessage("Successful. Returning to login now.");
            setSuccessful(true);
            returnToLogin();
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
        setCreated(true);
      
    };

    const passwordMatch = (value1, value2) =>{
      if(value1 != value2){
        setMatch(false);
      }
      else{
        setMatch(true);
      }
    };

    const returnToLogin = async () => {
      await delay(5000);
      router.back();
    }

    const goBack = async () => {
      await delay(1000);
      router.back();
    }
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
                      <label htmlFor="password">Password</label>
                      <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required, passLength]}
                      />
                    </div>
                    <div>
                      <label htmlFor="cpassword">Confirm Password</label>
                      <Input
                        type="password"
                        name="cpassword"
                        value={cpassword}
                        onChange={onChangeCPassword}
                        validations={[required, passLength]}
                      />
                      {!match ? <div>Passwords do not match</div> : null}
                    </div>
                    <div>
                      <button>Sign Up</button>
                    </div>
                    <br />
                    
                  </div>
                )}
                  <div>
                      {successful && 
                        <div>
                        {message}
                        </div>
                      }
                      {!successful &&
                        <div>
                        {message}
                        </div>
                      }
                  </div>
              </Form>
              <button onClick={goBack}>Back</button>
          </div>
        </div>
      </div>
    );
  };
  export default Register;