import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

AOS.init();

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Teresa May",
      role: "Founder at ET Company",
      image: "https://via.placeholder.com/150",
      rating: 4.5,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    },
    {
      name: "Maggie McLoan",
      role: "Photographer at Studio LA",
      image: "https://via.placeholder.com/150",
      rating: 5,
      quote:
        "Autem, totam debitis suscipit saepe sapiente magnam officiis quaerat necessitatibus odio assumenda perferendis labore laboriosam.",
    },
    {
      name: "Alexa Horwitz",
      role: "Front-end Developer in NY",
      image: "https://via.placeholder.com/150",
      rating: 4,
      quote:
        "Cras sit amet nibh libero, in gravida nulla metus scelerisque ante sollicitudin commodo cras purus odio, vestibulum in tempus viverra turpis.",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r bg-gray-900 text-white">
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h3 className="text-6xl font-bold mb-6">
          WHAT OUR COMMUNITY MEMBERS SAY
        </h3>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          Discover the experiences of our community members and see why they
          love being part of our group.
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-90 rounded-lg shadow-lg p-8 mx-4 transition-transform duration-500 hover:scale-105"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full shadow-lg w-24 h-24 mb-4 border-4 border-yellow-500"
                />
                <h5 className="text-2xl font-semibold">{testimonial.name}</h5>
                <h6 className="text-gray-400 mb-3">{testimonial.role}</h6>
                <div className="flex justify-center mb-4">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <FaStarHalfAlt className="text-yellow-500" />
                  )}
                </div>
                <p className="text-gray-300 italic text-center">
                  <FaQuoteLeft className="inline-block text-yellow-500 mr-2" />
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
