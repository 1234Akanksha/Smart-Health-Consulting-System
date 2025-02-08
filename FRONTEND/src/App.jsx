/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
 
import React, { useContext, useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
import Appointment from './pages/Appointment';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';

import { Context } from './main';
import Footer from './components/Footer';
import Cardiology from './pages/Cardiology';
import Yoga from './pages/Yoga';
import Dermatologist from './pages/Dermatologist';
import Pyschiatrist from './pages/Pyschiatrist';
import Neurologist from './pages/Neurologist';
import Profile from './pages/Profile';

export const App = () => {
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(Context);
  useEffect(() => {
    
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/user/patient/me", {
          withCredentials: true,
        });
        setUser(res.data.user);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };

    fetchUser();
  }, [isAuthenticated]);
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/cardiology' element={<Cardiology />} />
          <Route path='/yoga' element={<Yoga />} />
          <Route path='/dermatologist' element={<Dermatologist />} />
          <Route path='/pyschiatrist' element={<Pyschiatrist />} />
          <Route path='/neurologist' element={<Neurologist />} />
          <Route path='/profile' element={<Profile />} />


        </Routes>
        <Footer />
        <ToastContainer position='top-center' />
      </Router>
    </>
  )
}

export default App
