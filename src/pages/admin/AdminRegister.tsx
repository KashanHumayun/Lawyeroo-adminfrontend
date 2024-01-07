import React, { ChangeEvent, FormEvent, useState } from 'react';
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };


  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="flex flex-col items-center text-center">
              <img 
                src={adminGraphic}
                alt="Admin Graphic"
                className="w-48 mx-auto my-4 md:w-64 lg:w-80 xl:w-96 transform hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-4xl font-bold text-white mb-3">Join Our Team</h2>
              <p className="text-gray-300 mb-6">
                Be part of a community that empowers and supports each other to achieve greatness.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="p-8 bg-white shadow-2xl rounded-2xl backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-100">
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Registration</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  { /* Form fields */ }
                  <InputField label="First Name" name="firstName" type="text" handleChange={handleChange} />
                  <InputField label="Last Name" name="lastName" type="text" handleChange={handleChange} />
                  <InputField label="Email" name="email" type="email" handleChange={handleChange} />
                  <InputField label="Phone Number" name="phoneNumber" type="text" handleChange={handleChange} />
                  <InputField label="Address" name="address" type="text" handleChange={handleChange} />
                  <InputField label="Password" name="password" type="password" handleChange={handleChange} />
                </div>
                <div className="flex flex-col md:flex-row justify-between mt-6">
                  <button type="submit" className="w-full md:w-auto px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300">Register</button>
                  <button type="reset" className="w-full md:w-auto px-6 py-3 text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 transition duration-300 mt-4 md:mt-0">Reset</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, handleChange }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <input 
      type={type} 
      name={name}
      placeholder={label}
      onChange={handleChange}
      className="w-full px-4 py-3 border rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-300"
    />
  </div>
);

export default AdminRegister;
