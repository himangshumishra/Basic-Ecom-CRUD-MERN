import React from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
  return (
    <div className="container mx-auto bg-blue-300">
      <h1 className="text-3xl font-bold my-4 text-center">Product Management</h1>
      <ProductList />
    </div>
  );
};

export default Home;
