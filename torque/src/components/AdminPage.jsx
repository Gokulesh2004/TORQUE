import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash, FaUsers, FaCar, FaCalendarAlt } from 'react-icons/fa';

// Sample data with images and descriptions added
const sampleUsers = [
  { id: 1, name: "Gokulesh", email: "gokul@example.com" },
  { id: 2, name: "Adhi", email: "adhi@example.com" },
];

const sampleProducts = [
  {
    id: 1,
    name: "Brake Pad Set",
    price: 999,
    category: "Brakes",
    image: "https://example.com/brake-pad.jpg",
    description: "High-quality brake pad set for optimal braking performance.",
  },
  {
    id: 2,
    name: "Oil Filter",
    price: 199,
    category: "Filters",
    image: "https://example.com/oil-filter.jpg",
    description: "Durable oil filter ensuring engine longevity.",
  },
];

const sampleEvents = [
  {
    id: 1,
    name: "Annual Car Show",
    date: "2024-08-15",
    image: "https://example.com/car-show.jpg",
    description: "A spectacular event showcasing the latest car models.",
  },
  {
    id: 2,
    name: "Mechanics Meetup",
    date: "2024-09-10",
    image: "https://example.com/meetup.jpg",
    description: "A gathering of top mechanics to share industry insights.",
  },
];

const AdminPage = () => {
  const [users, setUsers] = useState(sampleUsers);
  const [products, setProducts] = useState(sampleProducts);
  const [events, setEvents] = useState(sampleEvents);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);

  // Handlers to open and close forms
  const openEventForm = () => setShowEventForm(true);
  const closeEventForm = () => setShowEventForm(false);
  const openProductForm = () => setShowProductForm(true);
  const closeProductForm = () => setShowProductForm(false);

  // Delete handlers
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="bg-gray-900 min-h-screen py-10 pt-24 text-white font-sans">
      {/* Page Title */}
      <h1 className="text-center text-5xl font-extrabold text-yellow-400 mb-8">
        Torque Admin Dashboard
      </h1>

      <div className="container mx-auto px-4 space-y-10">
        {/* User Management Section */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            <FaUsers className="inline-block mr-2" /> Manage Users
          </h2>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6 mb-6">
            {users.length > 0 ? (
              <ul>
                {users.map((user) => (
                  <li
                    key={user.id}
                    className="flex justify-between items-center border-b border-gray-700 py-2"
                  >
                    <span className="text-gray-300">
                      {user.name} ({user.email})
                    </span>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="text-red-500 hover:text-red-600 transition duration-150 focus:outline-none"
                    >
                      <FaTrash />
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No users found.</p>
            )}
          </div>
        </div>

        {/* Product Management Section */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            <FaCar className="inline-block mr-2" /> Manage Products
          </h2>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <button
              onClick={openProductForm}
              className="mb-4 bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-150 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <FaPlus className="inline-block mr-2" /> Add New Product
            </button>
            {products.length > 0 ? (
              <ul>
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex justify-between items-center border-b border-gray-700 py-2"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 rounded"
                      />
                      <div>
                        <span className="text-gray-300 font-semibold">
                          {product.name} - ₹{product.price}
                        </span>
                        <p className="text-gray-400 text-sm">
                          {product.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <button className="text-yellow-500 hover:text-yellow-600 transition duration-150 focus:outline-none">
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="text-red-500 hover:text-red-600 transition duration-150 focus:outline-none"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No products available.</p>
            )}
          </div>
        </div>

        {/* Events Management Section */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            <FaCalendarAlt className="inline-block mr-2" /> Manage Events
          </h2>
          <div className="bg-gray-800 shadow-lg rounded-lg p-6">
            <button
              onClick={openEventForm}
              className="mb-4 bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-150 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <FaPlus className="inline-block mr-2" /> Add New Event
            </button>
            {events.length > 0 ? (
              <ul>
                {events.map((event) => (
                  <li
                    key={event.id}
                    className="flex justify-between items-center border-b border-gray-700 py-2"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-12 h-12 rounded"
                      />
                      <div>
                        <span className="text-gray-300 font-semibold">
                          {event.name} - {event.date}
                        </span>
                        <p className="text-gray-400 text-sm">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <button className="text-yellow-500 hover:text-yellow-600 transition duration-150 focus:outline-none">
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteEvent(event.id)}
                        className="text-red-500 hover:text-red-600 transition duration-150 focus:outline-none"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No events available.</p>
            )}
          </div>
        </div>
      </div>

      {/* Event Form Modal */}
      {showEventForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-yellow-400 text-2xl mb-4">Add New Event</h3>
            {/* Form Inputs */}
            <input
              type="text"
              placeholder="Event Name"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-300"
            />
            <input
              type="date"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-300"
            />
            <input
              type="url"
              placeholder="Image URL"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-300"
            />
            <textarea
              placeholder="Event Description"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-300"
            ></textarea>
            {/* Buttons */}
            <button
              onClick={closeEventForm}
              className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-red-600"
            >
              Cancel
            </button>
            <button className="bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-150">
              Add Event
            </button>
          </div>
        </div>
      )}

      {/* Product Form Modal */}
      {showProductForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-yellow-400 text-2xl mb-4">Add New Product</h3>
            {/* Form Inputs */}
            <input
              type="text"
              placeholder="Product Name"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-300"
            />
            <input
              type="number"
              placeholder="Price"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-300"
            />
            <input
              type="url"
              placeholder="Image URL"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-300"
            />
            <textarea
              placeholder="Product Description"
              className="w-full mb-4 p-2 rounded bg-gray-700 text-gray-300"
            ></textarea>
            {/* Buttons */}
            <button
              onClick={closeProductForm}
              className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-red-600"
            >
              Cancel
            </button>
            <button className="bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-150">
              Add Product
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
