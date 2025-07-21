import React from 'react';

const features = [
  {
    title: 'Real-Time Diagnostics',
    description: 'Monitor your vehicle’s performance in real-time with cutting-edge diagnostics tools.',
    icon: '⚙️', // Replace with an actual image or SVG if necessary.
  },
  {
    title: '24/7 Support',
    description: 'Our support team is available around the clock to assist with any issues or inquiries.',
    icon: '📞',
  },
  {
    title: 'User-Friendly Interface',
    description: 'Enjoy an intuitive and easy-to-use interface that makes managing your vehicle simple.',
    icon: '💻',
  },
  {
    title: 'Customizable Alerts',
    description: 'Set up personalized alerts for maintenance and performance checks based on your needs.',
    icon: '🔔',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-500" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Key Features
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-5xl text-blue-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
