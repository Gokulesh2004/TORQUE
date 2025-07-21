import React, { useState } from 'react';
import Footer from '../Footer';

const products = [
  {
    id: 1,
    name: "Brake Pad Set",
    category: "Brakes",
    price: 999,
    description: "High-quality brake pads for enhanced stopping power and safety.",
    image: "https://media.istockphoto.com/id/1356661564/photo/set-of-brake-pads-on-a-mirror-background.jpg?s=612x612&w=0&k=20&c=q58hOlV35g6poYfk1_fBuN7nUCrykl1yLcwbx1paFr4=",
    owner: "Auto Parts Supplier",
    postedDate: "2024-11-05",
  },
  {
    id: 2,
    name: "Oil Filter",
    category: "Filters",
    price: 199,
    description: "Durable oil filter to keep your engine clean and running smoothly.",
    image: "https://www.stouffvilletoyota.com/wp-content/uploads/2019/11/oil-filters-1024x777.png",
    owner: "Engine Essentials",
    postedDate: "2024-10-15",
  },
  {
    id: 3,
    name: "Spark Plugs (4-Pack)",
    category: "Ignition",
    price: 799,
    description: "Long-lasting spark plugs to ensure efficient engine performance.",
    image: "https://api.hyundaimobisin.com/service/asset/part/Engine%20&%20Transmission/70-spark-plug.jpg",
    owner: "Ignition Experts",
    postedDate: "2024-09-20",
  },
  {
    id: 4,
    name: "Air Filter",
    category: "Filters",
    price: 349,
    description: "High-flow air filter to improve engine airflow and performance.",
    image: "https://www.carparts.com/blog/wp-content/uploads/2020/08/replacing-air-filter.jpeg",
    owner: "AirTech",
    postedDate: "2024-09-05",
  },
  {
    id: 5,
    name: "Timing Belt",
    category: "Engine Parts",
    price: 4999,
    description: "Durable timing belt for smooth and reliable engine operation.",
    image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_535,q_auto,w_950/c_pad,h_535,w_950/F4750816-01?pgw=1&pgwact=1",
    owner: "BeltWorks",
    postedDate: "2024-08-30",
  },
  {
    id: 6,
    name: "Car Battery",
    category: "Batteries",
    price: 7499,
    description: "Heavy-duty car battery with long-lasting performance.",
    image: "https://ap.boschcarservice.com/in/media/images/16_9/services/electronic_services/battery_check/job_2931_final_image_640w_360h.webp",
    owner: "PowerMax",
    postedDate: "2024-08-15",
  },
  {
    id: 7,
    name: "Radiator",
    category: "Cooling System",
    price: 5500,
    description: "Efficient radiator to keep your engine temperature under control.",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/1/LS/WX/MP/75631399/audi-car-radiator.jpg",
    owner: "CoolFlow Systems",
    postedDate: "2024-07-25",
  },
  {
    id: 8,
    name: "Windshield Wipers",
    category: "Accessories",
    price: 599,
    description: "All-weather windshield wipers for a clear view in any condition.",
    image: "https://tse3.mm.bing.net/th?id=OIP.9gCYDFmVRd7YtY8mrDZCMAHaE8&pid=Api&P=0&h=220",
    owner: "VisionClear",
    postedDate: "2024-06-18",
  },{
    id: 9,
    name: "Dashboard Camera",
    category: "Electronics",
    price: 3499,
    description: "High-resolution dash cam for recording your drive.",
    image: "https://vader-prod.s3.amazonaws.com/1704311743-dashcams-18-6595bbab86b2d.jpg",
    owner: "SafeDrive",
    postedDate: "2024-03-25",
  },
  {
    id: 10,
    name: "Fog lapms",
    category: "Accessories",
    price: 899,
    description: "Compact vacuum cleaner to keep your car's interior clean.",
    image: "https://m.media-amazon.com/images/I/613mGaaDy2L.AC_UF894,1000_QL80.jpg",
    owner: "CleanCar",
    postedDate: "2024-02-14",
  },
  {
    id: 11,
    name: "Fuel Injector",
    category: "Engine Parts",
    price: 1599,
    description: "Efficient fuel injector for optimal fuel delivery.",
    image: "https://detroit-media.imgix.net/service/group-fuel-injectors.jpg",
    owner: "Injector Experts",
    postedDate: "2024-08-01",
  },
 {
    id: 12,
    name: "Oil Pump",
    category: "Engine Parts",
    price: 4500,
    description: "High-quality oil pump to ensure proper lubrication.",
    image: "https://www.pedalsandpumps.com/wp-content/uploads/2013/02/oilpump.jpg",
    owner: "LubriTech",
    postedDate: "2024-10-30",
  },
];

const Shop = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const filteredProducts = filter === "All"
    ? products
    : products.filter((product) => product.category === filter);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-10 pt-24 text-white font-sans">
      <h1 className="text-center text-5xl font-extrabold text-yellow-400 mb-8">
        SPARE PARTS MARKETPLACE
      </h1>
      <p className="text-center text-gray-400 mb-8">
        Discover high-quality spare parts for your vehicle.
      </p>

      {/* Filter Section */}
      <div className="flex justify-center mb-6">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-700 bg-gray-800 text-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        >
          <option value="All">All Categories</option>
          <option value="Brakes">Brakes</option>
          <option value="Filters">Filters</option>
          <option value="Ignition">Ignition</option>
          <option value="Engine Parts">Engine Parts</option>
          <option value="Batteries">Batteries</option>
          <option value="Cooling System">Cooling System</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      {/* Cart Section */}
      <div className="text-center mb-8">
        <button className="text-yellow-400 font-bold">
          Cart: {cart.length} {cart.length === 1 ? 'item' : 'items'}
        </button>
      </div>

      {/* Product Listings */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 shadow rounded-lg p-6"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4 border border-gray-700"
            />
            <h2 className="text-2xl font-bold text-white mb-2">{product.name}</h2>
            <p className="text-gray-400 mb-3">{product.description}</p>
            <p className="text-2xl font-bold text-yellow-400">
              ₹{product.price.toLocaleString()}
            </p>
            <button
              onClick={() => handleViewDetails(product)}
              className="mt-4 w-full bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            >
              View Details
            </button>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 w-full bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-gray-800 rounded-lg p-8 max-w-lg w-full mx-4 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-yellow-500 hover:text-yellow-600 focus:outline-none"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold text-yellow-400 mb-2">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-300 mb-4">
              <strong>Owner:</strong> {selectedProduct.owner}
            </p>
            <p className="text-gray-300 mb-4">
              <strong>Posted Date:</strong> {selectedProduct.postedDate}
            </p>
            <p className="text-gray-300 mb-4">{selectedProduct.description}</p>
            <button
              onClick={closeModal}
              className="mt-4 w-full bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Shop;
