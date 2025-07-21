import React, { useState } from 'react';

const RacingEvents = () => {
  // State to track which card is expanded on click
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle card expansion on click
  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Expand the clicked card or collapse if clicked again
  };

  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516674184-00b9f98cd206')", // Replace with your desired background image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900 "></div>

      {/* Indian Racing Section */}
      <div className="relative z-10 text-center text-white mb-12">
        <h1 className="text-6xl font-bold">INDIAN RACING</h1>
        <h3 className="text-4xl mt-4">LET YOUR PASSION THROTTLE</h3>
        <h6 className="mt-2 max-w-xl mx-auto">
          Are you ready to rev up your engines and take the racing world by storm? The Ultimate Young Bike Racing Championship is calling out to all young riders who have a burning passion for speed, adrenaline, and the thrill of competition.
        </h6>
      </div>

      {/* Flex Container for Overlapping Cards */}
      <div className="relative z-10 max-w-9xl mx-auto flex justify-center items-center flex-wrap px-6">
        {racingData.map((event, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`relative cursor-pointer  rounded-lg transition-all duration-300 ease-in-out overflow-hidden  shadow-lg group flex-shrink-0 ${
              expandedIndex === index
                ? 'w-72 lg:w-80 h-96'
                : 'w-56 lg:w-64 h-80 hover:scale-105'
            }`} // Expanded card logic and hover effect
            style={{
              transform: expandedIndex === index ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            {/* Card Image */}
            <img
              src={event.image}
              alt={event.title}
              title={event.title}
              className="w-full h-full object-cover transition-transform duration-300"
              loading="lazy"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-60 transition-opacity duration-300 flex items-center justify-center ${
                expandedIndex === index
                  ? 'opacity-100'
                  : 'opacity-0 group-hover:opacity-100'
              }`} // Black gradient background
            >
              <div className="text-center text-white">
                <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                {expandedIndex === index && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full transition-all"
                  >
                    Discover More
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Racing event data
const racingData = [
  {
    title: 'HONDA RACING',
    image: 'https://wallpapercave.com/wp/wp9032521.jpg',
    link: 'https://www.hondaracingindia.com',
  },
  {
    title: 'SUZUKI ENDURANCE',
    image: 'https://wallpapercave.com/wp/Rj63HG0.jpg',
    link: 'https://suzukicycles.com/racing',
  },
  {
    title: 'KTM RACING CUP',
    image: 'https://wallpapercave.com/wp/wp12792160.jpg',
    link: 'https://www.ktmindia.com/ktmrccup',
  },
  {
    title: 'TVS ONE CHAMPIONSHIP',
    image: 'https://tvsracingimages.tvsmotor.com/tvsracing/DarkSlider/bikeRace.webp?sv=2023-11-03&st=2024-10-14T12%3A30%3A00Z&se=2024-10-28T12%3A30%3A00Z&sr=c&sp=r&sig=zJpUG0o9urrZ3HFpL4OXtwk4ZgrLMpfcy4vMsVwivcQ%3D',
    link: 'https://www.tvsmotor.com/tvsracing/tvs-asia-one-make-championship-omc',
  },
  {
    title: 'GT CUP',
    image: 'https://wallpapercave.com/wp/wp5601381.jpg',
    link: 'https://www.royalenfield.com/in/en/gtcup/',
  },
];

export default RacingEvents;
