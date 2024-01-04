import React, { useState } from 'react';

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
    createdAt: '',
    updatedAt: '',
    profilePicture: '',
    accountType: '',
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
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-pink-200">
      <div className="hidden lg:block">
        {/* Insert your graphic here. Example: */}
        <img src="../assests/images/admin_register.png" alt="Admin Graphic" className="w-96 h-auto" />
      </div>
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Admin Registration</h3>
        <form onSubmit={()=>{handleSubmit;handleChange}} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            {/* Input fields */}
          </div>
          {/* Other form fields and buttons */}
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
