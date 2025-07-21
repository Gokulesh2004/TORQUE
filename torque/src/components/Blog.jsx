import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRegCalendarAlt, FaUser } from 'react-icons/fa';
import Footer from './Footer';

const Blog = () => {
  const [filter, setFilter] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [allBlogs, setAllBlogs] = useState([
    {
      id: '1',
      category: 'Car Review',
      title: 'The Future of Electric Vehicles: What to Expect in 2024',
      summary:
        'Explore the groundbreaking advancements in electric vehicle technology and what it means for the automotive industry.',
      imgSrc:
        'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1600',
      author: 'John Doe',
      date: 'August 15, 2024',
      views: 1200,
    },
    {
      id: '2',
      category: 'Bike Review',
      title: 'Top 10 Motorcycles That Will Dominate the Roads in 2024',
      summary:
        'A comprehensive review of the most anticipated motorcycles set to release this year.',
      imgSrc:
        'https://images.pexels.com/photos/210241/pexels-photo-210241.jpeg?auto=compress&cs=tinysrgb&w=1600',
      author: 'Jane Smith',
      date: 'August 10, 2024',
      views: 1500,
    },
    {
      id: '3',
      category: 'Technical Review',
      title: 'Autonomous Driving: The Next Big Leap in Transportation',
      summary:
        'Delving into the latest developments in self-driving technology and its impact on future mobility.',
      imgSrc:
        'https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?auto=compress&cs=tinysrgb&w=1600',
      author: 'Mike Johnson',
      date: 'August 8, 2024',
      views: 1800,
    },
    {
      id: '4',
      category: 'Maintenance Tips',
      title: 'Essential Maintenance Tips for Your Classic Car',
      summary:
        'Keep your vintage beauty running smoothly with these expert maintenance tips.',
      imgSrc:
        'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1600',
      author: 'Alice Walker',
      date: 'August 20, 2024',
      views: 1000,
    },
    {
      id: '5',
      category: 'Travel Stories',
      title: 'Riding Across America: A Biker’s Journey',
      summary:
        'Experience the thrill and freedom of a cross-country motorcycle trip through this inspiring story.',
      imgSrc:
        'https://images.pexels.com/photos/1685730/pexels-photo-1685730.jpeg?auto=compress&cs=tinysrgb&w=1600',
      author: 'Bob Brown',
      date: 'August 22, 2024',
      views: 2000,
    },
  ]);
  const [newBlog, setNewBlog] = useState({
    category: '',
    title: '',
    summary: '',
    imgSrc: '',
    author: '',
    date: '',
    views: 0,
  });

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Filter logic for Blogs
  const filteredBlogs =
    filter === 'All'
      ? allBlogs
      : allBlogs.filter((blog) => blog.category === filter);

  // Latest News - Sort by date (descending)
  const latestBlogs = [...allBlogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Trending News - Sort by views (descending)
  const trendingBlogs = [...allBlogs].sort((a, b) => b.views - a.views);

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleCreateBlog = (e) => {
    e.preventDefault();
    setAllBlogs([...allBlogs, { ...newBlog, id: `${allBlogs.length + 1}` }]);
    setShowForm(false);
    setNewBlog({
      category: '',
      title: '',
      summary: '',
      imgSrc: '',
      author: '',
      date: '',
      views: 0,
    });
  };

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://wallpaperaccess.com/full/166158.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4" data-aos="fade-down">
            AUTO NEWS & ARTICLES
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto" data-aos="fade-up">
            Stay updated with the latest news, reviews, and stories from the world of cars and bikes.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
            onClick={() => setShowForm(!showForm)}
            data-aos="fade-up"
          >
            {showForm ? 'Close Form' : 'Create Blog'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* First Column: Filtered Blogs and Latest News */}
        <div>
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12">
            {['All', 'Car Review', 'Bike Review', 'Technical Review', 'Maintenance Tips', 'Travel Stories'].map(
              (category) => (
                <button
                  key={category}
                  className={`m-2 px-5 py-2 rounded-full border ${
                    filter === category
                      ? 'bg-red-600 text-white border-red-600'
                      : 'text-gray-300 border-gray-600 hover:bg-red-600 hover:border-red-600 hover:text-white transition'
                  }`}
                  onClick={() => setFilter(category)}
                  data-aos="fade-in"
                >
                  {category}
                </button>
              )
            )}
          </div>

          {/* Create Blog Form */}
          {showForm && (
            <form
              className="bg-gray-800 p-8 rounded-lg shadow-md space-y-6 mb-12"
              onSubmit={handleCreateBlog}
              data-aos="fade-in"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Create New Blog</h2>
              <div>
                <label className="block text-gray-300 mb-2">Category</label>
                <input
                  type="text"
                  name="category"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                  value={newBlog.category}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Title</label>
                <input
                  type="text"
                  name="title"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                  value={newBlog.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Summary</label>
                <textarea
                  name="summary"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                  value={newBlog.summary}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Image URL</label>
                <input
                  type="text"
                  name="imgSrc"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                  value={newBlog.imgSrc}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Author</label>
                <input
                  type="text"
                  name="author"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                  value={newBlog.author}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                  value={newBlog.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
              >
                Create Blog
              </button>
            </form>
          )}

          {/* Filtered Blogs */}
          <div className="space-y-8">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="flex flex-col lg:flex-row bg-gray-800 rounded-lg shadow-md overflow-hidden" data-aos="fade-in">
                <img
                  src={blog.imgSrc}
                  alt={blog.title}
                  className="w-full lg:w-1/3 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {blog.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <FaUser className="mr-1" /> {blog.author} &nbsp;|&nbsp;{' '}
                    <FaRegCalendarAlt className="mr-1" /> {blog.date}
                  </div>
                  <p className="text-gray-300">{blog.summary}</p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="inline-block mt-4 px-4 py-2 text-red-600 hover:text-red-700 border border-red-600 rounded-full hover:bg-gray-900 transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Column: Latest & Trending Blogs */}
        <div>
          {/* Latest News */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6 mb-12" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-white mb-4">Latest News</h2>
            <ul className="space-y-4">
              {latestBlogs.slice(0, 5).map((blog) => (
                <li key={blog.id} className="flex items-start">
                  <img
                    src={blog.imgSrc}
                    alt={blog.title}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-200">
                      <Link to={`/blog/${blog.id}`} className="hover:text-red-600">
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-gray-400">{blog.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Trending News */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-white mb-4">Trending News</h2>
            <ul className="space-y-4">
              {trendingBlogs.slice(0, 5).map((blog) => (
                <li key={blog.id} className="flex items-start">
                  <img
                    src={blog.imgSrc}
                    alt={blog.title}
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-200">
                      <Link to={`/blog/${blog.id}`} className="hover:text-red-600">
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-gray-400">{blog.views} views</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Blog;
