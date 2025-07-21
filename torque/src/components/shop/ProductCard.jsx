import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="p-5">
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500">{product.name}</h2>
          <p className="text-gray-600 text-sm mt-2">{product.description.slice(0, 50)}...</p>
          <p className="text-blue-700 font-bold mt-3 text-lg">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
