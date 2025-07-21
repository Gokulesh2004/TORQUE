import React, { useState } from 'react';
import Footer from './Footer';
import axios from 'axios';

const racesData = {
  "RACING EVENTS": {
    description: "Experience the thrill of drag racing with high-speed sprints and intense competition.",
    events: [
      { id: 1, name: "KTM RACING", date: "June 15, 2025", image: "https://i.pinimg.com/236x/f0/6a/c5/f06ac5258cd311eac4021aa6c100f017.jpg" },
      { id: 2, name: "SUZUKI RACING", date: "June 25, 2025", image: "https://i.pinimg.com/236x/1a/2a/7d/1a2a7d1217f0fd25d47a80d82921324e.jpg" },
    ],
    imageUrl: "https://wallpaperaccess.com/thumb/2501080.jpg"
  },
  "CAR SHOWS": {
    description: "Push your limits in endurance racing, where stamina is as important as speed.",
    events: [
      { id: 3, name: "BMW SHOWOFF", date: "July 20, 2025", image: "https://i.pinimg.com/236x/75/1a/3f/751a3f7af5eb058e8c80c88d5d513c0f.jpg" },
      { id: 4, name: "MODIFIED LAMBO", date: "July 30, 2025", image: "https://i.pinimg.com/236x/0c/f5/80/0cf580c5c2ffcd8143a1ee976b41a8df.jpg" },
    ],
    imageUrl: "https://wallpaperaccess.com/thumb/250503.jpg"
  },
 "COMMUNITY MEETUPS": {
    description: "Navigate twists and turns in our exciting circuit races with skilled drivers.",
    events: [
      { id: 5, name: "CHENNAI", date: "August 10, 2025", image: "https://i.pinimg.com/736x/61/96/72/619672ddd82420e9ce85ca1d53651563.jpg" },
      { id: 6, name: "COIMBATORE", date: "August 20, 2025", image: "https://i.pinimg.com/236x/af/02/a6/af02a6799fb3c9815e680976cf9d8043.jpg" },
    ],
    imageUrl: "https://i.pinimg.com/736x/59/1b/18/591b18563385d4e57206117835e717fd.jpg"
  }
};

const EventSection = () => {
  const [selectedRaceType, setSelectedRaceType] = useState(null);
  const [selectedRaceEvent, setSelectedRaceEvent] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('http://localhost:9000/bookings', data, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      })
      console.log(response.data);
      // Optionally, reset form or show success message
      setFormData({ name: '', email: '', phone: '' });
      setShowRegistrationForm(false);
      alert('Registration successful!');
    } catch (err) {
      setError('Failed to register. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section
        className="min-h-screen bg-cover bg-center text-white py-24 px-8 md:px-20 lg:px-32 xl:px-48"
        style={{
          backgroundImage: "url('https://wallpaperaccess.com/thumb/38119.jpg')",
          backgroundSize: 'cover',
        }}
      >
        {/* Display Race Types in Zigzag Layout */}
        {!selectedRaceType && (
          <div className="text-center max-w-full mx-auto">
            <h2 className="text-6xl font-extrabold text-yellow-400 mb-16 tracking-widest uppercase">Choose Your Events</h2>
            <div className="flex flex-col items-center space-y-24">
              {Object.keys(racesData).map((type, index) => (
                <div
                  key={type}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} w-full space-y-8 md:space-y-0 md:space-x-16`}
                >
                  <div
                    className="p-12 w-full md:w-1/2 bg-black bg-opacity-70 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer md:mr-6 md:ml-6"
                    onClick={() => setSelectedRaceType(type)}
                  >
                    <h3 className="text-5xl font-bold text-yellow-400 tracking-wide">{type}</h3>
                    <p className="text-gray-300 mt-8 text-xl">{racesData[type].description}</p>
                  </div>
                  <img
                    src={racesData[type].imageUrl}
                    alt={`${type} Thumbnail`}
                    className="rounded-lg w-full h-96 object-cover md:w-1/2 md:ml-6"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Display Race Events */}
        {selectedRaceType && !selectedRaceEvent && (
          <div className="text-center max-w-full mx-auto mt-16">
            <h2 className="text-5xl font-extrabold text-yellow-400 mb-12 tracking-widest uppercase">Available Events in {selectedRaceType}</h2>
            <div className="flex flex-col items-center space-y-10">
              {racesData[selectedRaceType].events.map((race) => (
                <div
                  key={race.id}
                  className="p-12 w-full max-w-3xl bg-black bg-opacity-50 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
                  onClick={() => setSelectedRaceEvent(race)}
                >
                  <h3 className="text-4xl font-bold text-yellow-400">{race.name}</h3>
                  <p className="text-gray-300 mt-4 text-lg">Date: {race.date}</p>
                  <img src={race.image} alt={`${race.name}`} className="mt-6 rounded-lg w-full h-60 object-cover"/>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Display Race Event Details with Register Button */}
        {selectedRaceEvent && !showRegistrationForm && (
          <div className="max-w-full mx-auto bg-black bg-opacity-90 p-12 rounded-lg shadow-xl mt-12">
            <h2 className="text-5xl font-bold text-yellow-400 text-center mb-10 tracking-wider uppercase">{selectedRaceEvent.name}</h2>
            <p className="text-gray-300 text-lg mb-8">Date: {selectedRaceEvent.date}</p>
            <p className="text-gray-300 text-lg mb-8">Location: RaceCourse</p>
            <img src={selectedRaceEvent.image} alt={`${selectedRaceEvent.name}`} className="rounded-lg w-full h-60 object-cover mb-8"/>
            <button
              onClick={() => setShowRegistrationForm(true)}
              className="w-full py-4 bg-yellow-400 rounded-lg font-semibold text-gray-900 hover:bg-yellow-500 transition-colors text-xl"
            >
              Register Now
            </button>
            <button
              onClick={() => { setSelectedRaceEvent(null); setSelectedRaceType(null); }}
              className="w-full py-4 mt-4 bg-red-500 rounded-lg font-semibold text-gray-900 hover:bg-red-600 transition-colors text-xl"
            >
              Back to Event Types
            </button>
          </div>
        )}

        {/* Display Registration Form */}
        {selectedRaceEvent && showRegistrationForm && (
          <div className="max-w-full mx-auto mt-16 p-12 bg-black bg-opacity-90 rounded-lg shadow-xl">
            <h2 className="text-5xl font-bold text-yellow-400 text-center mb-10 tracking-wider uppercase">Register for {selectedRaceEvent.name}</h2>
            <form onSubmit={handleFormSubmit} className="space-y-8">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full p-4 bg-gray-800 rounded-lg text-white"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full p-4 bg-gray-800 rounded-lg text-white"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full p-4 bg-gray-800 rounded-lg text-white"
                required
              />
              {loading ? (
                <button
                  type="submit"
                  className="w-full py-4 bg-yellow-400 rounded-lg font-semibold text-gray-900 cursor-not-allowed"
                  disabled
                >
                  Registering...
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full py-4 bg-yellow-400 rounded-lg font-semibold text-gray-900 hover:bg-yellow-500 transition-colors text-xl"
                >
                  Register Now
                </button>
              )}
            </form>
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default EventSection;
