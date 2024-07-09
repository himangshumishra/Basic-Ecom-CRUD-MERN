import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [product, setProduct] = useState({
    productId: '',
    name: '',
    price: '',
    company: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/products', product, { withCredentials: true });
      console.log(response.data);

      setSuccessMessage('Product added successfully');
      setErrorMessage('');

      // Clear the form after successful submission
      setProduct({
        productId: '',
        name: '',
        price: '',
        company: ''
      });
    } catch (error) {
      console.error('Error adding product:', error);

      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Something went wrong. Please try again.');
      }

      setSuccessMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4 border border-gray-300 rounded">
      <div className="mb-4">
        <label className="block text-gray-700">Product ID</label>
        <input
          type="text"
          name="productId"
          placeholder="Product ID"
          value={product.productId}
          onChange={handleChange}
          required
          className="mt-2 p-2 w-full border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleChange}
          required
          className="mt-2 p-2 w-full border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
          className="mt-2 p-2 w-full border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Company</label>
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={product.company}
          onChange={handleChange}
          required
          className="mt-2 p-2 w-full border border-gray-300 rounded"
        />
      </div>
      {errorMessage && <p className="text-red-500 font-bold text-center">{errorMessage}</p>}
      {successMessage && <p className="text-green-500 font-bold text-center">{successMessage}</p>}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Product</button>
    </form>
  );
};

export default AddProductForm;
