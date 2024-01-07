import React, { useState } from "react";
import loginGraphic from "../assets/images/admin_login.png"; // Replace with your login image path

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);
    // Add your login logic here
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-pink-600">
      <div className="md:w-1/2 px-4 flex justify-center text-center">
        <div className="animate-fade-in-up">
          <img
            src={loginGraphic}
            alt="Login Graphic"
            className="w-64 max-w-xs mx-auto my-4 md:my-0 transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <h2 className="text-3xl font-bold text-gray-100 mb-2">Welcome to Lawyeroo</h2>
          <p className="text-gray-300 mb-6">
            Where legal needs are met with professional care.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <div className="p-6 mt-4 text-left bg-white shadow-2xl rounded-2xl max-w-md mx-auto backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:border-purple-500 focus:ring-2 focus:ring-purple-300 transition duration-300"
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:border-pink-500 focus:ring-2 focus:ring-pink-300 transition duration-300"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-6">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
              >
                Sign In
              </button>
              <button
                type="reset"
                className="w-full md:w-auto px-6 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 transition duration-300 mt-4 md:mt-0"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
