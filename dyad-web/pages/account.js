// Referenced code for login logic at https://www.bezkoder.com/react-jwt-auth/
import React, { useEffect, useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Textarea from "react-validation/build/textarea";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import styles from "../styles/Account.module.css";
import Image from "next/image";
import { useRouter} from 'next/router'
import { Loading } from 'react-loading-dot';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import testPic from '../public/assets/user.png';
import { runPullImage } from "../grpc-client/client.js";

//Const functions for validators during registration and login.
//Cannot have an empty field
const required = value => {
  if (!value) {
    return (
      <div >
        Field cannot be empty.
      </div>
    );
  }
};

//Password length validator
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
};

//Biography length validator
const bioLength = value => {
  if(value.length > 240){
    return(
      <div>
        Biography too long.
      </div>
    );
  }
}

//Delay helper function
const delay = ms => new Promise(res => setTimeout(res, ms));

//The account page shows the user's account when logging in for account management. As for now, the website's functionality does not include password changing or biography editing,
//as the API endpoint had trouble with CORS. Users will only be able to create an account and login.
export default function Account(){
  //State variables
  const form = useRef();
  const router = useRouter();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setNewConfirmPassword] = useState("");
  const [changingPass, setChangingPass] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [match, setMatch] = useState(false);
  const [biography, setBiography] = useState("");
  const [changingBio, setChangingBio] = useState(false);
  const [username, setUsername] = useState("");

  //Local storage grab for username
  useEffect (() => {
    setUsername(localStorage.getItem("username"));
  });

  //State setting functions
  const onChangeOldPassword = (e) => {
    const oldPassword = e.target.value;
    setOldPassword(oldPassword);
  }
  
  const onChangeNewPassword = (e) => {
    const newPassword = e.target.value;
    passwordMatch(newPassword, newConfirmPassword);
    setNewPassword(newPassword);
  };

  const onChangeNewConfirmPassword = (e) => {
    const newConfirmPassword = e.target.value;
    passwordMatch(newConfirmPassword, newPassword);
    setNewConfirmPassword(newConfirmPassword);
  };

  const onChangeBiography = (e) => {
    const newBio = e.target.value;
    setBiography(newBio);
  }

  //Validator to make sure passwords match
  const passwordMatch = (value1, value2) =>{
    if(value1 != value2){
      setMatch(false);
    }
    else{
      setMatch(true);
    }
  }

  //On logout, remove JWT from authentication in localstorage and redirect to login screen
  const handleLogout = (e) => {
    e.preventDefault();
    AuthService.logout();
    goToLogin();
  };

  //Password change helper to display a dropdown box
  const handlePasswordChanging = (e) => {
    e.preventDefault();
    setChangingPass(true);
  }

  //Password change first validates that old and new password are okay, and confirms. 
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    passwordMatch(newPassword, newConfirmPassword);
    setLoading(true);
    setMessage("");
    //LOGIC: Here you should request api to see if current password is good, and also POST new pass
    await delay(2000); //Simulating a POST req
    setChangingPass(false);
    setLoading(false);  
  }

  //Dropdown box for a biography change
  const handleBiographyChanging = (e) => {
    e.preventDefault();
    setChangingBio(true);
  }

  //Biography is changing, call API endpoint to reset for account
  const handleBiographyChange = async (e) => {
    e.preventDefault();
    //Logic for API call to change biography
    UserService.updateDescription("" , biography).then(
      (response) => {
        setMessage("Successful update of biography.")
      },
      (error) => {
        console.log(error.message);
        const resMessage =
          "Could not update biography." ||
          error.toString();
        setMessage(resMessage);
      }
    )
    setChangingBio(false);
    setLoading(false);
  }

  //Unused; Get biography from backend; API endpoint was malfunctioning due to CORS errors.
  const getBiography = async (e) => {
    e.preventDefault();
    UserService.getDescription().then(
      (response) => {
        setMessage("Successful grab of biography.")
        setBiography(response.data.Profile_Description);
      },
      (error) => {
        console.log(error.message);
        const resMessage =
          "Could not fetch biography." ||
          error.toString();
        setMessage(resMessage);
      }
    );
  }

  //Reroute to login
  const goToLogin = async () => {
    await delay(1000);
    router.push("/login");
  }

  /*TODO:
  1. Change password
  2. Change  
  
  <Image
                  src = {testPic}
                  layout = "responsive"
                  height = {180}
                  width = {180}
                  priority
                />*/

  return (
      <div className={styles["about-wrapper"]}>
        <center>
          <h1 className={styles["page-title"]}>Dyad - Login</h1>
        </center>
        <div>
          <div className={styles["account-body"]}>
            <h2 className={styles["welcome-title"]}>Welcome, {username}</h2>
            <div>
              <div className={styles["flex-container"]}>
                <h3>Profile Picture</h3>
              <div className={styles["profile-picture"]}>
                
                <svg
                  width="180"
                  height="180"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3>Biography</h3>
              <p>
                {biography}
              </p>
              </div>
            </div>
            <Stack spacing={2}>
              <Box><span>
                <button className={styles["button-change"]} onClick={handlePasswordChanging}>Change Password</button>
                </span>
                <div className={styles["vl"]}></div>
                {changingPass && (
                <Form
                onSubmit={handlePasswordChange}
                ref={form} 
                >
                <div>
                  <label htmlFor="oldPassword">Old Password</label>
                  <Input
                    type="password"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={onChangeOldPassword}
                  />
                </div>
                <div>
                  <label htmlFor="newPassword">New Password</label>
                  <Input
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={onChangeNewPassword}
                    validations={[required, passLength]}
                  />
                </div>
                <div>
                  <label htmlFor="newConfirmPassword">Confirm Password</label>
                  <Input
                    type="password"
                    name="newConfirmPassword"
                    value={newConfirmPassword}
                    onChange={onChangeNewConfirmPassword}
                    validations={[required, passLength]}
                  />
                  <div>
                    {!match ? <div>Passwords do not match</div> : null}
                    {loading && match? <Loading background="grey"/> :
                    <button>
                      <div>Submit</div>
                    </button>}
                  </div>
                    {message && (
                      <div>
                        <div>
                          {message}
                        </div>
                      </div>
                    )}
                </div>
                </Form>
              )}
              </Box>
              <Box>
                <span>
                  <button className={styles["button-change"]} onClick={handleBiographyChanging}>Edit Biography</button>
                </span>
                {changingBio && (
                <Form
                onSubmit={handleBiographyChange}
                ref={form} 
                >
                <div>
                  <label htmlFor="newBiography">New Biography</label>
                  <br />
                  <Textarea
                    value={biography}
                    ref={form}
                    onChange={onChangeBiography}
                    rows="4"
                    columns="100"
                    style={{resize: "none"}}
                    validations={[bioLength]}
                  />
                  <div>
                    {loading ? <Loading background="grey"/> :
                    <button>
                      <div>Submit</div>
                    </button>}
                  </div>
                    {message && (
                      <div>
                        <div>
                          {message}
                        </div>
                      </div>
                    )}
                </div>
                </Form>
                )}
              </Box>
              <Box>
                <span>
                  <button className={styles["button-change"]} onClick={console.log("edit pfp")}>Edit Profile Picture</button>
                </span>
              </Box>
              <Box>
                <span>
                  <button className={styles["button-change"]} onClick={handleLogout}>Logout</button>
                </span>
              </Box>
            </Stack>
            
          </div>
        </div>
      </div>
    );
}

