import axios from "axios";
const API_URL = "http://api.dyadsocial.com:8000/core/";
class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login/", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("logout");
  }
  register(username, password) {
    return axios.post(API_URL + "register", {
      username,
      password
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}
export default new AuthService();