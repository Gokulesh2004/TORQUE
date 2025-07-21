import React, { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './teamstyle.css'; // Custom styles (create this file)
import Frame80 from "C:/TORQUE/torque/src/assets/Frame 80.png";
import Frame79 from "C:/TORQUE/torque/src/assets/Frame 79.png";
import Frame78 from "C:/TORQUE/torque/src/assets/Frame 78.png";
import Frame77 from "C:/TORQUE/torque/src/assets/Frame 77.png";
import Frame76 from "C:/TORQUE/torque/src/assets/Frame 76.png";
import Frame75 from "C:/TORQUE/torque/src/assets/Frame 75.png";
import Footer from './Footer';

const teamMembers = [
  {
    name: "Gokulesh",
    role: "Event Coordinator",
    image: "public/WhatsApp Image 2024-11-05 at 13.50.28_c11435b7.jpg",
    phone: "+1 (123) 456-7890",
    email: "john.smith@example.com",
    description:
      "John has over 10 years of experience in event coordination. He specializes in creating memorable experiences and ensuring that every event runs smoothly. His attention to detail and leadership skills make him an invaluable asset to our team.",
  },
  {
    name: "Alice Johnson",
    role: "Decorations Specialist",
    image: "/public/WhatsApp Image 2024-08-10 at 08.45.11_568b4d8f - Copy.jpg",
    phone: "+1 (234) 567-8901",
    email: "alice.johnson@example.com",
    description:
      "Alice is a creative genius when it comes to decorations. With a background in interior design, she brings a unique touch to every event. Alice is passionate about transforming spaces into magical environments that captivate and inspire.",
  },
  {
    name: "Emily Parker",
    role: "Entertainment Manager",
    image: "/public/WhatsApp Image 2024-08-10 at 08.45.32_b935574d.jpg",
    phone: "+1 (345) 678-9012",
    email: "emily.parker@example.com",
    description:
      "Emily has a talent for selecting the perfect entertainment for any occasion. Her connections in the entertainment industry and her ability to read the crowd ensure that every event she manages is lively and engaging.",
  },
];

const TeamCard = ({ name, imgSrc, description, phone, email }) => (
  <div className="flex flex-col items-center text-center bg-black rounded-lg p-6 shadow-md transition-transform transform hover:scale-105">
    <img src={imgSrc} alt={name} className="rounded-full w-40 h-40 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-sm text-gray-600 mb-2">{description}</p>
    <div className="flex justify-center gap-4 mt-4">
      <a href={`tel:${phone}`}>
        <i className="fas fa-phone text-lg text-blue-500"></i>
      </a>
      <a href={`mailto:${email}`}>
        <i className="fas fa-envelope text-lg text-blue-500"></i>
      </a>
    </div>
  </div>
);

const TeamSection = ({ title, members, aosAnimation }) => (
  <div className="mb-12" data-aos={aosAnimation}>
    <h2 className="text-3xl font-bold text-white mb-8">{title}</h2>
    <div className="grid md:grid-cols-2 gap-8 mx-auto max-w-4xl px-4">
      {members.map((member) => (
        <TeamCard key={member.name} {...member} />
      ))}
    </div>
  </div>
);

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const slider = document.querySelector('.slide-track');
    let index = 0;

    const slideInterval = setInterval(() => {
      index = (index + 1) % 12; // Adjust based on the number of slides
      slider.style.transform = `translateX(-${index * 100}%)`;
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-9 bg-black font-sans">
    <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden"> {/* Adjust height here (e.g., 64px for a navbar) */}
    <img
      src="https://cdn.wallpapersafari.com/26/79/9GnY3E.jpg"
      alt="Banner"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">TORQUE TEAM</h1>
      <h2 className="text-lg md:text-2xl max-w-3xl">
        Torque is a passionate group of engineers and car enthusiasts dedicated to providing detailed reviews and insights on automobiles and bikes.
      </h2>
      <button
        className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition-all"
        onClick={scrollToAbout}
      >
        OUR TEAM
      </button>
    </div>
  </div>
  

      {/* About Torque Section */}
      <div id="about-section" className="max-w-7xl mx-auto text-center my-12">
        <h1 className="text-5xl font-bold text-white mb-11">TORQUE</h1>
        <p className="text-2xl text-white max-w-9xl mx-auto mb-8">
        At <strong>Torque</strong>, we take pride in being a reliable source of automotive information. 
        Our mission is to provide in-depth reviews, expert opinions, and the latest news in the automotive industry, 
        fostering a deeper passion for both cars and motorcycles among our audience.
      
        <br /><br />
        
        Whether you're an enthusiast looking for detailed performance analyses or someone who simply appreciates the beauty 
        of finely engineered machines, <strong>Torque</strong> has something for everyone. 
        We strive to offer engaging, informative content that caters to all levels of interest, from casual viewers to seasoned experts.
      
        <br /><br />
      
        Our dedicated team of automotive professionals and engineers work tirelessly to bring you the most accurate and insightful information. 
        From performance tests to in-depth features on automotive trends, we make sure to cover every aspect of the industry. 
        We believe that understanding the intricacies of vehicle design, functionality, and performance is key to appreciating the automotive world.
      
        <br /><br />
      
        At <strong>Torque</strong>, our passion extends beyond just vehicles. 
        We aim to build a community where like-minded individuals can come together to share their love for automobiles, 
        exchange ideas, and stay informed about the latest advancements in technology and design.
      
        <br /><br />
      
        By continuously evolving and adapting to the dynamic automotive landscape, we ensure that our content remains relevant and fresh. 
        Whether it's the latest electric car launch, a supercar review, or a deep dive into the future of autonomous vehicles, 
        <strong>Torque</strong> is committed to keeping our audience at the forefront of automotive innovation.
      </p>
      
        {/* Add more details as needed */}
      </div>

      {/* Founders Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Our Founders</h2> 
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10 px-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="relative rounded-lg overflow-hidden bg-sky-300 shadow-lg transition-transform duration-500 cursor-pointer"
            >
              <img
                className="w-50 h-50 object-cover"
                src={member.image}
                alt={member.name}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center text-white px-4 transition-opacity duration-500 opacity-0 hover:opacity-100"
              >
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-lg font-semibold">{member.role}</p>
                <p className="text-sm mt-4">{member.description}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href={`tel:${member.phone}`}>
                    <i className="fas fa-phone text-lg text-blue-500"></i>
                  </a>
                  <a href={`mailto:${member.email}`}>
                    <i className="fas fa-envelope text-lg text-blue-500"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tie-Ups Section */}
      <div className="movinglogposss">
        <h2 className="text-2xl text-center text-white">Our Tie-Ups</h2>
        <div className="slide-track">
          <div className="slide">
            <img src={Frame80} alt="Frame 80" />
          </div>
          <div className="slide">
            <img src={Frame79} alt="Frame 79" />
          </div>
          <div className="slide">
            <img src={Frame78} alt="Frame 78" />
          </div>
          <div className="slide">
            <img src={Frame77} alt="Frame 77" />
          </div>
          <div className="slide">
            <img src={Frame76} alt="Frame 76" />
          </div>
          <div className="slide">
            <img src={Frame75} alt="Frame 75" />
          </div>
        </div>
      </div>
         {/* Contact Section */}
         <div>
         <div className="max-w-5xl mx-auto mt-16 px-6 py-12 bg-gray-800 text-white rounded-lg shadow-lg" id="contact-section">
         <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
         <p className="text-center mb-8">
           Have questions or want to work with us? Send us a message, and we'll get back to you as soon as possible!
         </p>
         <form className="grid gap-6 sm:grid-cols-2">
           <div>
             <label className="block text-sm font-medium mb-1" htmlFor="name">Your Name</label>
             <input type="text" id="name" placeholder="John Doe" className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
           </div>
           <div>
             <label className="block text-sm font-medium mb-1" htmlFor="email">Your Email</label>
             <input type="email" id="email" placeholder="john@example.com" className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
           </div>
           <div className="sm:col-span-2">
             <label className="block text-sm font-medium mb-1" htmlFor="message">Your Message</label>
             <textarea id="message" rows="4" placeholder="Type your message here" className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"></textarea>
           </div>
           <div className="sm:col-span-2 text-center">
             <button type="submit" className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-600 transition-all">
               Send Message
             </button>
           </div>
         </form>
       </div>
       </div>
<div>
      {/* Footer Component */}
      <Footer />
      </div>
    </div>
  );
};

export default Team;
