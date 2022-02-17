import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'http://api.dyadsocial.com:8000/core/';
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
}
  
export default new UserService();