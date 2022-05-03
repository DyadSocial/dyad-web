import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://api.dyadsocial.com/core/";
//AuthService class handles calls to the back-end for authentication
class AuthService {
  //Login method provides user and pass and returns JWT which is stored if authenticated
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password
      })
      .then(response => {
        if (response.data["jwt"]) {
          localStorage.setItem("jwt", response.data["jwt"]);
        }
        return response.data;
      });
  }
  //Logout removes the JWT from localstorage
  logout() {
    localStorage.removeItem("jwt");
  }
  //Register is used to create the account
  register(username, password) {
    return axios.post(API_URL + "register", {
      username,
      password
    });
  }
  //Registerprofile is used to add their description and display name
  registerProfile(display_name, profile_description){
    console.log(localStorage.getItem('jwt'));
    return axios.post(API_URL + "profile/create-user-profile", {
      display_name,
      profile_description
    },
    {
      headers: {'jwt': localStorage.getItem('jwt')}
    });
  }
  //Used to get current jwt authentication, helper function
  getCurrentJWT() {
    return JSON.parse(localStorage.getItem('jwt'));;
  }
}
export default new AuthService();