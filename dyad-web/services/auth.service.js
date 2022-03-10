import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://api.dyadsocial.com/core/";
class AuthService {
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
  logout() {
    localStorage.removeItem("jwt");
  }
  register(username, password) {
    return axios.post(API_URL + "register", {
      username,
      password
    });
  }
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
  getCurrentJWT() {
    return JSON.parse(localStorage.getItem('jwt'));;
  }
}
export default new AuthService();