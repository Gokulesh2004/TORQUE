import React from 'react';
import './Hero.css'; // Assuming you'll add styles in this CSS file

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2023/09/21/181537-866999852_large.mp4" // Replace with your video URL
        autoPlay
        muted
        loop
      />
                    
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center">
        <div className="text-white">
          <h1 className="text-7xl font-bold mb-4 swipe-up-animation">DISCOVER THE THRILL OF THE RIDE WITH US </h1>
          <p className="text-2xl mb-6 swipe-up-animation">Discover, connect, and share your passion with fellow enthusiasts.</p>
          <a
            href="/signup"
            className="bg-blue-800 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg shadow-md transition-all duration-300 swipe-up-animation"
          >
            Join the Community
          </a>
        </div>
      </div>

      {/* Modern Swipe Up Instruction */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <div className="swipe-up-container">
          <div className="swipe-up-circle">
            <div className="swipe-up-arrow"></div>
          </div>
          <p className="text-sm mt-2 text-gray-300">Swipe Up</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
