import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();

  const checkAuthStatus = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/user/patient/me", {
        withCredentials: true,
      });
      setIsAuthenticated(response.data.success);
    } catch (err) {
      console.log("Error checking authentication status:", err);
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role: "Patient" },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );
  
      toast.success(res.data.message);
      setIsAuthenticated(true); // Update authentication state
  
      // Instead of checking auth status again, you can directly navigate
      navigateTo("/"); // Navigate immediately after setting authentication state
  
      // Clear input fields
      setEmail("");
      setPassword("");
    } catch (error) {
      const message = error.response?.data?.message || "Login failed. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };
  

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container form-component login-form">
      <h2>Login</h2>
      <p>Please Login To Continue</p>
      <br/>
      <p>
        Take control of your health with SMART 
        Health Consulting System.Login today and experience a smarter way to consult with doctors , where your well-being is our priority.
              </p>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div>
          <Link to="/register">Not Registered?  Register Now</Link>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
