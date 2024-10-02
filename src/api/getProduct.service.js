import axios from "axios";
import authHeader from "./Auth.header";
class getProductService {
  getProductList() {
    console.log(JSON.stringify({ headers: authHeader() }))
    return axios.get("http://127.0.0.1:3005/api/product", { headers: authHeader() });
   
  }
}
export default new getProductService();
