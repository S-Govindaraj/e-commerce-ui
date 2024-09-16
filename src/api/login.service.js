import axios from "axios";
const crypto = require("crypto-js");
// const password = process.env.JWT_PASSWORD;
const password = 'd6F3Efeq'
class loginService {
login(data) {
  debugger
  console.log(password)
    var CiperText = crypto.AES.encrypt(JSON.stringify(data), password).toString();
    var payLoad = {
      request_data: CiperText,
    };
    return axios.post(
      // process.env.REACT_APP_API_URL + `/login`,
      'http://127.0.0.1:8080/api/login',
      payLoad,
    );
  }
}
export default new loginService();