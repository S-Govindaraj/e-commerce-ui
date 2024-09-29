import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Login from "./components/Auth/Login";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  debugger;
  return (
    <Router>
       <ToastContainer />
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/cart/*"
          element= { <Dashboard />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
        
      </Routes>
    </Router>
  );
}

export default App;
