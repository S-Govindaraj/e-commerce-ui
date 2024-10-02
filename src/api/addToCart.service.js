import axios from "axios";
import authHeader from "./Auth.header";
const crypto = require("crypto-js");
// const password = process.env.JWT_PASSWORD;
const password = "d6F3Efeq";

class addToCartService {
    
    addToCart(data) {
    var CiperText = crypto.AES.encrypt(JSON.stringify(data), password).toString();
    var payLoad = {
      request_data: CiperText,
    };
    debugger
    return axios.post("http://127.0.0.1:3005/api/cart/update", payLoad,{ headers: authHeader() });
  }
}
export default new addToCartService();
