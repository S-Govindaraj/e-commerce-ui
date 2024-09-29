import axios from "axios";
class getProductService {
  getProductList() {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`, // Replace 'token' with your actual token storage key
    };

    return axios.get("http://127.0.0.1:3005/api/product", { headers });
  }
}
export default new getProductService();
