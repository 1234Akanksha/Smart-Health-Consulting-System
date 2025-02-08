import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css"; // Add custom CSS for styling

const Profile = () => {
  const [user, setUser] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to manage loading
  const navigate = useNavigate(); // React Router's navigate hook

  useEffect(() => {
    // Fetch user details on page load
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          { withCredentials: true }
        );
        if (response.data.success) {
          setUser(response.data.user); // Set user data
        } else {
          navigate("/login"); // Redirect to login if not authenticated
        }
      } catch (err) {
        console.error("Error fetching user details:", err);
        navigate("/login"); // Redirect to login on error
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchUserDetails();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  if (!user) {
    navigate("/login");// Return nothing if user is not available
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">My Profile</h1>
      <div className="profile-card">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <p><strong>First Name:</strong> {user.firstName}</p>
          <p><strong>Last Name:</strong> {user.lastName}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Date of Birth:</strong> {new Date(user.dob).toLocaleDateString()}</p>
        </div>
        <div className="profile-section">
          <h2>Contact Details</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
        <div className="profile-section">
          <h2>Identification</h2>
          <p><strong>Aadhar Card:</strong> {user.adharCard}</p>
        </div>
        {user.role === "Doctor" && (
          <div className="profile-section">
            <h2>Doctor Information</h2>
            <p><strong>Department:</strong> {user.doctorDepartment || "N/A"}</p>
            {user.docAvatar && user.docAvatar.url && (
              <img
                src={user.docAvatar.url}
                alt="Doctor Avatar"
                className="avatar-img"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
