import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="mb-4">
            <h3 className="text-white text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-400">We are passionate about bringing the latest updates, news, and expert insights on racing events, cars, and motorcycles. Join the fast lane and stay informed about the racing world!</p>
          </div>

          {/* Links Section */}
          <div className="mb-4">
            <h3 className="text-white text-lg font-semibold mb-2">Explore</h3>
            <ul className="text-gray-400">
              <li><a href="/races" className="hover:underline">Upcoming Races</a></li>
              <li><a href="/drivers" className="hover:underline">Top Drivers</a></li>
              <li><a href="/news" className="hover:underline">Racing News</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="mb-4">
            <h3 className="text-white text-lg font-semibold mb-2">Stay in the Race</h3>
            <p className="text-gray-400">Sign up for exclusive race updates, car reviews, and behind-the-scenes stories!</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-gray-800 text-gray-300 py-2 px-4 rounded-lg mb-2 focus:outline-none"
              />
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg">Subscribe</button>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="mb-4">
            <h3 className="text-white text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-red-600">
                <i className="fab fa-youtube"></i> YouTube
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} RacingWorld. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
