import React, { useState } from "react";
import loginGraphic from "../assets/images/admin_login.png"; // Replace with your login image path

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

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
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-pink-200">
      <div className="md:w-1/2 px-4 flex justify-center text-center">
        <div>
          <img
            src={loginGraphic}
            alt="Login Graphic"
            className="w-90px max-w-xs mx-auto my-4 md:my-0 hidden transform hover:rotate-2  transition-transform duration-500 ease-in-out sm:block"

          />
          <h2 className="text-2xl font-bold mb-2">Welcome to Lawyeroo</h2>
          <p className="text-gray-600 mb-6">
            Where legal needs are met with professional care.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <div className="p-6 mt-4 text-left bg-white shadow-xl rounded-xl max-w-sm mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6">Login to Your Account</h3>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div>
              <label className="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-6">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Sign In
              </button>
              <button
                type="reset"
                className="w-full md:w-auto px-6 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 mt-4 md:mt-0"
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

