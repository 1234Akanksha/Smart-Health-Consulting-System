import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
// import "./Navbar.css"; // Add custom CSS for styling if needed

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context); // Using context
  const [isAuth, setIsAuth] = useState(isAuthenticated); // Sync with context initially
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false); // Update context
        setIsAuth(false); // Update local state
        navigateTo("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const goToLogin = () => {
    navigateTo("/login");
  };

  const goToProfile = () => {
    navigateTo("/profile");
  };

  // Effect to check authentication status and update Navbar
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/user/patient/me", {
          withCredentials: true,
        });
        if (response.data.success) {
          setIsAuthenticated(true); // Update context
          setIsAuth(true); // Update local state to match context
        }
      } catch (err) {
        console.log("Error checking authentication status:", err);
        setIsAuthenticated(false); // Update context
        setIsAuth(false); // Update local state to match context
      }
    };

    checkAuthStatus();
  }, [isAuthenticated, setIsAuthenticated]); // Depend on isAuthenticated to trigger updates

  return (
    <nav className="container">
      <div className="navbar-left">
        {isAuth && (
          <div className="profile-picture" onClick={goToProfile}>
            <img src="/profile1.jpg" alt="Profile" className="profile-img" />
          </div>
        )}
        <div className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
        </div>
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          <Link to={"/"} onClick={() => setShow(!show)}>
            Home
          </Link>
          <Link to={"/appointment"} onClick={() => setShow(!show)}>
            Appointment
          </Link>
          <Link to={"/about"} onClick={() => setShow(!show)}>
            Articles
          </Link>
        </div>
        {isAuth ? (
          <button className="logoutBtn btn" onClick={handleLogout}>
            LOGOUT
          </button>
        ) : (
          <button className="loginBtn btn" onClick={goToLogin}>
            LOGIN
          </button>
        )}
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
