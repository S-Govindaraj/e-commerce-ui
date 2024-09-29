import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginAPi from "../../api/login.service";
import LoginImage from "../../assets/fsdp0hvd.png";
import validateForm from "../../common/validation/loginValidation"; // Importing validation

import "./Login.css";

function Login() {
  const [username, setUsername] = useState(""); // Initialize with an empty string
  const [password, setPassword] = useState(""); // Initialize with an empty string
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const loginSubmit = async (e) => {
    e.preventDefault();
    const values = { username, password };
    const validationErrors = validateForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const data = {
        username: username,
        password: password,
      };

      const response = await loginAPi.login(data);
      const responseData = response.data;

      if (responseData.token) {
        navigate('/cart'); // Redirect to the dashboard page
        debugger
        toast.success("Login Successfully", {
          position: "top-right", // Change the position
          autoClose: 1000, // Set duration to 1 second
          hideProgressBar: false, // Show progress bar
          closeOnClick: true, // Close on click
          pauseOnHover: true, // Pause the timer when hovered
          draggable: true, // Allow dragging the toast
          progress: undefined, // Progress bar is automatically handled
          className: "my-custom-toast", // Custom CSS class for styling
          bodyClassName: "my-custom-toast-body",
        });
        localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      alert("Login Failed!");
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="row g-4 login-container">
      <div className="col-md-6 login-image">
        <img src={LoginImage} alt="login illustration" />
      </div>

      <div className="col-md-6 login-form">
        <h4>Get Started...</h4>

        <form onSubmit={loginSubmit} className="form-group" noValidate>
          <div className="input-group">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2" // Corrected stroke-width to strokeWidth
              strokeLinecap="round" // Corrected stroke-linecap to strokeLinecap
              strokeLinejoin="round" // Corrected stroke-linejoin to strokeLinejoin
            >
              <path d="M16 16.5a3.5 3.5 0 0 1-3.5-3.5h-4a3.5 3.5 0 0 1-3.5-3.5v-4a3.5 3.5 0 0 1 3.5-3.5h4a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-3.5 3.5z" />
            </svg>
            <input
              type="text"
              placeholder="User Name"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update the state for username
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>

          <div className="input-group">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2" // Corrected stroke-width to strokeWidth
              strokeLinecap="round" // Corrected stroke-linecap to strokeLinecap
              strokeLinejoin="round" // Corrected stroke-linejoin to strokeLinejoin
            >
              <path d="M12 15V3m0 12l-3-3m0 0 3-3m-3 6h6" />
            </svg>
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update the state for password
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn-signin">
            Sign In
          </button>
        </form>

        <div className="forgot-password">Forgot password?</div>

        <div className="social-login">
          <p>or Continue with</p>
        </div>
        <div className="social-login">
          <div className="icon-box">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google"
            />
          </div>
          <div className="icon-box">
            <img src="https://img.icons8.com/fluency/48/meta.png" alt="Meta" />
          </div>
          <div className="icon-box">
            <img
              src="https://img.icons8.com/color/48/000000/twitter--v1.png"
              alt="Twitter"
            />
          </div>
        </div>
        <div className="signUp-account">
          <div className="signup-text">Don't have an account yet?</div>
          <a className="signUp">
            Sign Up
          </a>
        </div>

        <p className="terms-privacy">
          By clicking the button above, you agree to our{" "}
          <a href="/terms">Terms</a> and <a href="/privacy">Privacy</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
