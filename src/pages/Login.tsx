import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import loginGraphic from "../assets/images/admin_register.png"; // Replace with your login image path

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // useNavigate instead of useHistory


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', loginData);
      
      // Redirect based on user type
      if (response.data.userType === 'admins') {
        localStorage.setItem('authToken', response.data.token);
        navigate('/admin/dashboard'); // Use navigate
      } else if (response.data.userType === 'lawyer') {
        navigate('/lawyer-dashboard'); // Use navigate
      } else if (response.data.userType === 'client') {
        navigate('/client-dashboard'); // Use navigate
      } else {
        setErrorMessage('Unexpected user type. Please contact support.');
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage('Email does not exist');
      } else if (error.response && error.response.status === 401) {
        setErrorMessage('Invalid password');
      } else {
        setErrorMessage('Login failed. Please try again later.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-pink-600">
      <div className="text-center">
        <img
          src={loginGraphic}
          alt="Login Graphic"
          className="w-64 max-w-xs mx-auto my-4 transform hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        <h2 className="text-3xl font-bold text-gray-100 mb-2">Welcome to Lawyeroo</h2>
        <p className="text-gray-300 mb-6">
          Where legal needs are met with professional care.
        </p>
      </div>
      <div className="w-full max-w-md px-4">
        <div className="p-6 mt-4 text-left bg-white shadow-2xl rounded-2xl max-w-md mx-auto backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label className="block text-gray-700 mb-1">Email</label>
              <div className="flex items-center bg-white border border-gray-300 rounded-lg">
                <FaEnvelope className="text-purple-600 p-2" />
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  className="w-full py-2 pl-2 bg-transparent focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="block text-gray-700 mb-1">Password</label>
              <div className="flex items-center bg-white border border-gray-300 rounded-lg">
                <FaLock className="text-purple-600 p-2" />
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="w-full py-2 pl-2 bg-transparent focus:outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
            {errorMessage && <div className="text-red-500 text-center my-2">{errorMessage}</div>}
            <div className="text-right text-sm text-blue-600 hover:text-blue-700 cursor-pointer mt-2">Forgot Password?</div>
            <div className="flex flex-col md:flex-row justify-between mt-6">
              <button type="submit" className="w-full md:w-auto px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition duration-300">Sign In</button>
              <button type="reset" className="w-full md:w-auto px-6 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-700 transition duration-300 mt-4 md:mt-0">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
