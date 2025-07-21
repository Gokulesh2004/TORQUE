import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';

AOS.init();

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [
    { src: 'https://wallpapercave.com/wp/wp4294330.jpg', alt: 'Community Event 1' },
    { src: 'https://wallpapercave.com/wp/wp4294351.jpg', alt: 'Community Event 2' },
    { src: 'https://wallpapercave.com/wp/Zdg6w3F.jpg', alt: 'Community Event 3' },
  ];

  return (
    <section className="bg-gradient-to-b bg-gray-900 text-white py-20">
      <div className="container mx-auto px-8 lg:px-16">
        {/* Main Heading */}
        <h2 className="text-6xl font-bold  text-center mb-16" data-aos="fade-up">
          WHY JOIN US ?
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Carousel */}
          <div className="order-2 lg:order-1" data-aos="fade-right">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-96 object-cover transition-transform transform hover:scale-105 duration-300"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Detailed Description */}
          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-8" data-aos="fade-left">
            <p className="text-lg leading-relaxed">
              Imagine being part of a community where your love for cars and bikes becomes an adventure, a place where adrenaline meets camaraderie. Whether you’re a speed demon on the track, a mechanic in the garage, or a weekend cruiser, you'll find your tribe here.
            </p>
            <p className="text-lg leading-relaxed">
              We’re more than just a group of enthusiasts. We are a vibrant network that thrives on our passion for powerful machines and the open road. Our community gives you access to exclusive events, thrilling races, meetups, and even behind-the-scenes looks at some of the most sought-after rides.
            </p>
            <p className="text-lg leading-relaxed">
              From mastering the art of the perfect corner to learning the ins and outs of custom tuning, our community is your go-to space for growth, learning, and pure excitement. It's not just about the machines; it’s about the bonds we form and the memories we create.
            </p>
            <p className="text-lg leading-relaxed">
              Join us now and fuel your passion in ways you never thought possible. Let’s drive, ride, and conquer the road together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
