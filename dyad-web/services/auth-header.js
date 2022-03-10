export default function authHeader() {
    const token = JSON.parse(localStorage.getItem('jwt'));
    console.log(token);
    if (token && token.jwt) {
      return { Authorization: 'Bearer ' + token.jwt };
    } else {
      return {};
    }
  }