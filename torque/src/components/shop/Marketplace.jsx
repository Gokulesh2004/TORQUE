import React from 'react';
import ProductCard from './ProductCard';

const Marketplace = ({ products }) => {
  return (
    <div className="bg-gray-50 py-12">
      <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-10">Spare Parts Marketplace</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
