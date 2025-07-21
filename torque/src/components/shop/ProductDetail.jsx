import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto bg-white p-10 rounded-lg shadow-md max-w-3xl">
        <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-lg" />
        <h2 className="text-3xl font-bold mt-6 text-gray-900">{product.name}</h2>
        <p className="text-gray-700 mt-4">{product.description}</p>
        <p className="text-blue-700 text-2xl font-bold mt-6">Price: ${product.price}</p>
        <button className="mt-8 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
          Contact Seller
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
