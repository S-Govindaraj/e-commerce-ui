export default function authHeader() {
    const token = localStorage.getItem('token')   
   debugger
    if (token) {
      debugger
       return { Authorization: 'Bearer ' + token }; // for Spring Boot back-end
      //return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }