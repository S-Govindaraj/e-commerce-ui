import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Cart/dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
debugger
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cart" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
