// Referenced code for login logic at https://www.bezkoder.com/react-jwt-auth/
import React, { useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import AuthService from "../services/auth.service";
import styles from "../styles/Account.module.css";
import { useRouter} from 'next/router'
import { Loading } from 'react-loading-dot';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const required = value => {
  if (!value) {
    return (
      <div >
        Field cannot be empty.
      </div>
    );
  }
};

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

export default function Account(){
  const form = useRef();
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [changingPass, setChangingPass] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [match, setMatch] = useState(false);

  const onChangeCurrentPassword = (e) => {
    const currentPassword = e.target.value;
    passwordMatch(newPassword, currentPassword);
    setCurrentPassword(currentPassword);
  };

  const onChangeNewPassword = (e) => {
    const newPassword = e.target.value;
    passwordMatch(newPassword, currentPassword);
    setNewPassword(newPassword);
  };

  const passwordMatch = (value1, value2) =>{
    if(value1 != value2){
      setMatch(false);
    }
    else{
      setMatch(true);
    }
  }

  const handleLogout = (e) => {
    e.preventDefault();
    AuthService.logout();
    goToLogin();
  };

  const handlePasswordChanging = (e) => {
    e.preventDefault();
    setChangingPass(true);
  }

  

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    passwordMatch(newPassword, currentPassword);
    setLoading(true);
    setMessage("");
    //LOGIC: Here you should request api to see if current password is good, and also POST new pass
    await delay(2000); //Simulating a POST req
    setChangingPass(false);
    setLoading(false);  
  }

  const goToLogin = async () => {
    await delay(1000);
    router.push("/login");
  }

  /*TODO:
  1. Change password
  2. Change  */

  return (
      <div className={styles["about-wrapper"]}>
        <center>
          <h1 className={styles["page-title"]}>Dyad - Login</h1>
        </center>
        <div className={styles["account-body"]}>
          <h2>Welcome, {localStorage.getItem("username")}</h2>
          <Stack spacing={2} alignItems="justify">
            <Box><span>
              <button className={styles["button-change"]} onClick={handlePasswordChanging}>Change Password</button>
              </span>
              {changingPass && (
              <Form
              onSubmit={handlePasswordChange}
              ref={form} 
              >
              <div>
                <label htmlFor="currentPassword">New Password</label>
                <Input
                  type="password"
                  name="currentPassword"
                  value={currentPassword}
                  onChange={onChangeCurrentPassword}
                  validations={[required, passLength]}
                />
              </div>
              <div>
                <label htmlFor="newPassword">Confirm Password</label>
                <Input
                  type="password"
                  name="newPassword"
                  value={newPassword}
                  onChange={onChangeNewPassword}
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
            <Box><span>
              <button className={styles["button-change"]} onClick={handleLogout}>Logout</button>
              </span>
            </Box>
          </Stack>
          
        </div>
      </div>
    );
}

