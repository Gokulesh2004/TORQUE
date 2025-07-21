import React, { useState } from 'react';

const AddListing = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto max-w-lg bg-white p-10 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Add Spare Part Listing</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Spare Part Name"
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
            className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
