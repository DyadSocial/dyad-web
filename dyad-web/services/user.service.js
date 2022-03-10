import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://api.dyadsocial.com/core/';
class UserService {
  getUserList() {
    return axios.get(API_URL + 'users-list/', { headers: authHeader() });
  }
  getTokenRefresh() {
    return axios.get(API_URL + 'token/refresh/', {headers: authHeader() });
  }
  getTokenVerify() {
    return axios.get(API_URL + 'token/verify/', {headers: authHeader() });
  }
  getDescription(){
    return axios
      .get(API_URL + 'profile/get-user-profile', {headers: authHeader() })
      .then(response => {
        return response.data;
      });
  }
  updateDescription(display_name, description) {
    return axios
      .put(API_URL + "profile/update-user-profile", {
        new_display_name: display_name,
        new_description: description
      })
      .then(response => {
        return response.data;
      });
  }
}
  
export default new UserService();