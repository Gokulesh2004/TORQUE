import React from 'react';

const Review = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <div className="flex flex-wrap justify-center mb-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mx-2 mb-2 hover:bg-blue-600">All</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mx-2 mb-2 hover:bg-blue-600">Bike Review</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mx-2 mb-2 hover:bg-blue-600">Car Review</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mx-2 mb-2 hover:bg-blue-600">Rider Viewpoint</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mx-2 mb-2 hover:bg-blue-600">Technical Reviews</button>
          </div>
          <h1 className="text-3xl font-bold mb-4">Latest Auto News</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              imgSrc: "https://i.imgur.com/b9o4n0D.png",
              alt: "TATA ALTROZ RACER",
              title: "TATA ALTROZ RACER",
              summary: "What if you get a car tuned out of the factory by the brand itself? Sounds enthusiastic right? For those car enthusiastic out there and those love tun",
              link: "/blogtype/668e1a02b8cff0bd3efcf5b6",
              author: "Dhinesh",
              date: "July 10th 2024"
            },
            {
              imgSrc: "https://i.imgur.com/qfTOFyY.jpeg",
              alt: "Maximizing Engine Efficiency: Unveiling the Power of O2 Sensors",
              title: "Maximizing Engine Efficiency: Unveiling the Power of O2 Sensors",
              summary: "In the realm of automotive performance, there's a silent hero operating behind the scenes, enhancing both your vehicle's performance and environmental",
              link: "/blogtype/66644b9deacfcd15937602df",
              author: "David",
              date: "June 8th 2024"
            },
            // ... More articles
          ].map((article, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img src={article.imgSrc} alt={article.alt} className="w-full h-48 object-cover" />
              </div>
              <div className="p-4">
                <a href={article.link} className="text-black text-lg font-semibold hover:underline">{article.title}</a>
                <p className="mt-2 text-gray-700">{article.summary}<a href={article.link} className="text-blue-500">... Read more</a></p>
                <p className="mt-4 text-sm text-gray-500">By {article.author}<span className="text-gray-400"> {article.date}</span></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;
