import React, { useState } from 'react';
import adminGraphic from '../../assets/images/admin_register.png'; // Ensure the path is correct

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
    createdAt: '', // Consider using a date picker or similar component
    updatedAt: '', // This too
    profilePicture: '', // Handle as a file input or URL
    accountType: '', // Possibly a dropdown or radio buttons
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-r from-purple-200 to-pink-200">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full px-4">
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center">
          <img 
            src={adminGraphic} 
            alt="Admin Graphic" 
            className="w-48 mx-auto my-4 md:w-64 lg:w-80 xl:w-96 md:my-0 border-purple-300 hover:scale-110 transition-transform duration-300 hidden sm:block"
          />
          <h2 className="text-3xl font-bold mb-2">Join Our Team</h2>
          <p className="text-gray-600 mb-6">
            Be part of a community that empowers and supports each other to achieve greatness.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="p-6 mt-4 md:mt-0 text-left bg-white shadow-xl rounded-xl">
            <h3 className="text-2xl font-bold text-center mb-6">Admin Registration</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>
    <label className="block">First Name</label>
    <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-300" />
  </div>
  <div>
    <label className="block">Last Name</label>
    <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-300" />
  </div>
</div>
<div>
  <label className="block">Email</label>
  <input type="email" placeholder="Email" name="email" onChange={handleChange} className="w-full md:w-3/4 px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-300" />
</div>
<div>
  <label className="block">Phone Number</label>
  <input type="text" placeholder="Phone Number" name="phoneNumber" onChange={handleChange} className="w-full md:w-3/4 px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-300" />
</div>
<div>
  <label className="block">Address</label>
  <input type="text" placeholder="Address" name="address" onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-300" />
</div>
<div>
  <label className="block">Password</label>
  <input type="password" placeholder="Password" name="password" onChange={handleChange} className="w-full md:w-3/4 px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-300" />
</div>
<div className="flex flex-col md:flex-row justify-between mt-6">
  <button type="submit" className="w-full md:w-auto px-6 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Register</button>
  <button type="reset" className="w-full md:w-auto px-6 py-2 text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 mt-4 md:mt-0">Reset</button>
</div>
</form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;



