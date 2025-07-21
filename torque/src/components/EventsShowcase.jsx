import React from 'react';

const EventsShowcase = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      {/* Racing Events Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="relative h-96 overflow-hidden rounded-lg">
          <img
            src="https://images.pexels.com/photos/142828/pexels-photo-142828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Racing Event"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h2 className="text-4xl font-bold mb-4">Upcoming Racing Events</h2>
            <p className="max-w-2xl mb-6">
              Join the thrill of speed! Our community hosts some of the most exciting racing events where the best drivers compete. Get ready to witness the adrenaline rush on the track!
            </p>
            <a
              href="/event"
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              View Events
            </a>
          </div>
        </div>
      </div>

      {/* Car Shows Section */}
      <div className="container mx-auto px-4">
        <div className="relative h-96 overflow-hidden rounded-lg">
          <video
            src="https://cdn.pixabay.com/video/2022/02/04/106722-673786473_large.mp4" 
            autoPlay 
            loop 
            muted 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          ></video>
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h2 className="text-4xl font-bold mb-4">Exclusive Car Shows</h2>
            <p className="max-w-2xl mb-6">
              Explore stunning cars and meet like-minded car enthusiasts at our community-organized car shows. From vintage to modern, we’ve got it all.
            </p>
            <a
              href="/car-shows"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsShowcase;
