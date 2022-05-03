// Referenced code for login logic at https://www.bezkoder.com/react-jwt-auth/
import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Textarea from "react-validation/build/textarea";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import styles from "../styles/Login.module.css";
import { useRouter } from 'next/router'

//Validator functions
//Field cannot be empty validator
const required = value => {
  if (!value) {
    return (
      <div >
        Field cannot be empty.
      </div>
    );
  }
};

//Username should not be too long or too short
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

//Password length should not be too long or too short
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

//Biography cannot be too long
const bioLength = value => {
  if(value.length > 240){
    return(
      <div>
        Biography too long.
      </div>
    );
  }
}


const delay = ms => new Promise(res => setTimeout(res, ms));

//Register page allows a user to register an account with Dyad. As for now, website only allows a user to login and register. For any account editing, they should use the mobile app.
//During demos, instructors said it may not be necesssary because you can already do it all on the mobile app.
const Register = (props) => {
    //State vars for RegisterPage
    const form = useRef();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [match, setMatch] = useState(false);
    const [created, setCreated] = useState(false);
    const [displayname, setDisplayName] = useState("");
    const [biography, setBiography] = useState("");

    const router = useRouter()
    
    //State setter functions
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
    const onChangeDisplayName = (e) => {
      const newdisplayname = e.target.value;
      setDisplayName(newdisplayname);
    }
    const onChangeBiography = (e) => {
      const newBio = e.target.value;
      setBiography(newBio);
    }
    //Function for handling when the submit button is pressed after registering and clearing all validators. Call API endpoint to create an account then redirect to login page.
    const handleRegister = async (e) => {
      e.preventDefault();
      setMessage("");
      setSuccessful(false);
      passwordMatch(password, cpassword);
      form.current.validateAll();
      
        AuthService.register(username, password).then(
          (response) => {
            setMessage("Successful. Returning to login now.");
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
        await delay(10000);
        //AuthService log in
        AuthService.login(username, password).then(
          (response) => {
            console.log("logged in");
            //console.log(localStorage.getItem('jwt'));
          },
          (error) => {
            console.log("cant log in");
          }
        );
        
        //Authservice register profile then return to login
        AuthService.registerProfile(displayname, biography).then(
          (response) => {
            returnToLogin();
          }
        );

        AuthService.logout();
        
        setCreated(true);
      
    };

    //Confirm password when creating to make sure they didn't type in wrong.
    const passwordMatch = (value1, value2) =>{
      if(value1 != value2){
        setMatch(false);
      }
      else{
        setMatch(true);
      }
    };

    //Go to login
    const returnToLogin = async () => {
      await delay(5000);
      router.back();
    }

    //Go back one page
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
                      <label htmlFor="displayname">Display Name</label>
                      <Input
                        type="text"
                        name="displayname"
                        value={displayname}
                        onChange={onChangeDisplayName}
                        validations={[required, userlength]}
                      />
                    </div>
                    <div>
                      <label htmlFor="newBiography">Tell us about yourself:</label>
                      <Textarea
                        type="text"
                        name="newBiography"
                        value={biography}
                        onChange={onChangeBiography}
                        rows="4"
                        columns="50"
                        style={{resize: "none"}}
                        validations={[bioLength]}
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