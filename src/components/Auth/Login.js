import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginAPi from "../../api/login.service";
import LoginImage from "../../assets/fsdp0hvd.png";

import "./Login.css";
function Login({setIsLoggedIn}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        username: username,
        password: password,
      };
      
      const response = await loginAPi.login(data);
      const responseData = response.data;
      console.log(toast);

      if (responseData.data !== "") {
        setIsLoggedIn(true);
        navigate('/cart'); // Redirect to the cart page
        alert(`Login Successfully!`)
      }
      debugger
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      alert(`Login Failed!`)
      console.error("Login failed:", error);
    }
  };
  return (
    <div className=" row login-container">
      <div className="col-md-6 login-image">
        <img src={LoginImage} alt="login illustration" />
      </div>

      <div className="col-md-6 login-form">
        <h2>Get Started...</h2>

        <form onSubmit={loginSubmit}>
          <div className="input-group">
            <i className="fa fa-envelope"></i>
            <input
              type="text"
              placeholder="User Name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update the state for email
            />
          </div>
          <div className="input-group">
            <i className="fa fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update the state for password
            />
          </div>

          <button type="submit" className="btn-signin">
            Sign In
          </button>
        </form>

        <a href="/" className="forgot-password">
          Forgot password?
        </a>

        <div className="social-login">
          <p>or Continue with</p>
          <div className="social-icons">
            <button>
              <i className="fa fa-google"></i>
            </button>
            <button>
              <i className="fa fa-facebook"></i>
            </button>
            <button>
              <i className="fa fa-twitter"></i>
            </button>
          </div>
        </div>

        <p className="signup-text">
          Don't have an account yet? <a href="/">Sign Up</a>
        </p>

        <p className="terms-privacy">
          By clicking the button above, you agree to our <a href="/">Terms</a>{" "}
          and <a href="/">Privacy</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
