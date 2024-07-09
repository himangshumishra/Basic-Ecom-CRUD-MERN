import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:8000/api/products');
      setProducts(res.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-4 text-center">Products</h2>
      <ul className="list-disc list-inside">
        {products.map(product => (
          <li key={product.productId} className="my-2 p-2 border border-gray-300 rounded text-center list-none font-bold">
            {product.name} - {product.price}-{product.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
