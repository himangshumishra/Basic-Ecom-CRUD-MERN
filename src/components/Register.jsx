import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/users/register', user,{
        withCredentials: true 
      
      });
      localStorage.setItem('token', res.data.token);
      alert('Registration successful');
    } catch (error) {
      alert('Error registering');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4 border border-gray-300 rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
          required
          className="mt-2 p-2 w-full border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
          className="mt-2 p-2 w-full border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
          className="mt-2 p-2 w-full border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Register</button>
    </form>
  );
};

export default Register;
