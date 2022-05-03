import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://api.dyadsocial.com/core/';
class UserService {
  getUserList() {
    return axios.get(API_URL + 'users-list/', 
    {
      headers: {'jwt': localStorage.getItem('jwt')}
    });
  }
  //Refresh token on expiry
  getTokenRefresh() {
    return axios.get(API_URL + 'token/refresh/', 
    {
      headers: {'jwt': localStorage.getItem('jwt')}
    });
  }
  //Verify token not expired
  getTokenVerify() {
    return axios.get(API_URL + 'token/verify/', 
    {
      headers: {'jwt': localStorage.getItem('jwt')}
    });
  }
  //Get the user description; Currently having issues with CORS not allowing requests to go through and returns a 404.
  getDescription(){
    return axios
      .get(API_URL + 'profile/get-user-profile',
      {
        headers: {'jwt': localStorage.getItem('jwt')}
      })
      .then(response => {
        return response.data;
      });
  }
  //Updates the user description. Currently having issues with CORS not allowing requests to go through.
  updateDescription(new_display_name, new_description) {
    return axios
      .put(API_URL + "profile/update-user-profile", {
        new_display_name,
        new_description
      },
      {
        headers: {'jwt': localStorage.getItem('jwt')}
      })
      .then(response => {
        return response.data;
      });
  }
}
  
export default new UserService();