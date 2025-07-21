import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // Sample data for demonstration. Replace with actual API call to fetch blog data.
  const blogPosts = {
    '1': {
      title: 'Latest in Cars: The Future of Electric Vehicles',
      content: 'In-depth article about the advancements in electric vehicles ans all services arw',
      imgSrc: 'https://www.pexels.com/photo/blue-bmw-sedan-near-green-lawn-grass-170811/',
      author: 'John Doe',
      date: 'August 15, 2024',
    },
    '2': {
      title: 'Top 10 Bikes to Look Out for in 2024',
      content: 'Detailed overview of the top bikes hitting the market this year...',
      imgSrc: 'https://www.pexels.com/photo/blue-bmw-sedan-near-green-lawn-grass-170811/',
      author: 'Jane Smith',
      date: 'August 10, 2024',
    },
    '3': {
      title: 'The Impact of New Emission Standards',
      content: 'How the latest emission standards are affecting the automotive industry globally...',
      imgSrc: 'https://www.pexels.com/photo/blue-bmw-sedan-near-green-lawn-grass-170811/',
      author: 'Mike Johnson',
      date: 'August 8, 2024',
    },
    
    // More blog posts...
  };

  const blog = blogPosts[id];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <img src={blog.imgSrc} alt={blog.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
          <p className="text-gray-600 mb-4">{blog.content}</p>
          <p className="text-sm text-gray-500">
            By {blog.author} on {blog.date}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
