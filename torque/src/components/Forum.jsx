import React, { useState } from 'react';
import Footer from './Footer';

const Forum = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState(null);
  const [posts, setPosts] = useState([
    {
        title: 'How to Improve Engine Performance?',
        content: 'Discuss the best practices and tools to enhance engine efficiency...',
        topic: 'Engine Performance',
        author: 'AutoExpert',
        media: 'https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        title: 'Best Car Accessories for Road Trips',
        content: 'Share your recommendations for must-have accessories when hitting the road...',
        topic: 'Car Accessories',
        author: 'TravelGuru',
        media: 'https://www.neodrift.in/cdn/shop/articles/Untitled_design_2_800x.png?v=1719632516',
      },
      {
        title: 'Tips for Winter Car Maintenance',
        content: 'Winter is coming! How do you keep your car in top shape during the cold months?',
        topic: 'Winter Car Maintenance',
        author: 'WinterCare',
        media: 'https://www.carblogindia.com/wp-content/uploads/2023/11/tips-winter-car-care.jpg',
      },
      {
        title: 'How to Save on Fuel Efficiency?',
        content: 'What are the best practices to improve fuel efficiency and save money on gas?',
        topic: 'Fuel Efficiency',
        author: 'EcoDrive',
        media: 'https://www.tvsmotor.com/-/media/Feature/Blog/TipsNTricks/blog-02-Innerbanner.jpg',
      },
      {
        title: 'The Best Car Modifications for Performance',
        content: 'Discuss modifications that increase performance without compromising safety...',
        topic: 'Car Modifications',
        author: 'ModMaster',
        media: 'https://miro.medium.com/v2/resize:fit:1400/1*22XOry9F8Otn4Xy_w_birw.jpeg',
      },
      {
        title: 'How to Prepare for Road Safety?',
        content: 'Tips on preparing for long road trips and ensuring road safety...',
        topic: 'Road Safety Tips',
        author: 'SafetyGuru',
        media: 'https://media.licdn.com/dms/image/D4E12AQHxtId3nFinTA/article-cover_image-shrink_600_2000/0/1679474147943?e=2147483647&v=beta&t=d1tSaedc6PMKFLmsd6K5BGTK9mLg5CE4eNVkUu-GtDI',
      },
      {
        title: 'Essential Tools for DIY Car Repairs',
        content: 'What are the must-have tools for every car owner who likes to do DIY repairs?',
        topic: 'Car Maintenance',
        author: 'FixItYourself',
        media: 'https://www.shutterstock.com/image-photo/closeup-shot-unrecognisable-man-wearing-600nw-2470156997.jpg',
      },
      {
        title: 'How to Choose the Right Tires for Your Vehicle?',
        content: 'Tips on selecting tires that best suit your vehicle and driving conditions.',
        topic: 'Tire Maintenance',
        author: 'TireGuru',
        media: 'https://d1291llfqm0n7k.cloudfront.net/wp-content/uploads/JIFY3488739_Tire-Rotation.jpg',
      },
      {
        title: 'Electric Cars: Are They the Future?',
        content: 'Let’s discuss the pros and cons of electric vehicles and their place in the future of transportation.',
        topic: 'Electric Cars',
        author: 'EcoWarrior',
        media: 'https://www.themandarin.com.au/wp-content/uploads/sites/5/2023/10/electric-vehicles.jpeg?fit=1024%2C683',
      },
      {
        title: 'How to Fix a Car That Won’t Start?',
        content: 'What steps should you take when your car refuses to start?',
        topic: 'Car Troubleshooting',
        author: 'MechanicOnCall',
        media: 'https://t4.ftcdn.net/jpg/04/46/79/17/360_F_446791779_sjwNjbdMMcj1ytEyT6D85PFgPno1Fq4U.jpg',
      },
      {
        title: 'The Ultimate Guide to Car Detailing',
        content: 'Everything you need to know about cleaning and detailing your car for that brand-new look.',
        topic: 'Car Cleaning and Detailing',
        author: 'DetailingPro',
        media: 'https://www.shutterstock.com/image-photo/red-sportscars-wheels-covered-shampoo-600nw-2287564577.jpg',
      },
      {
        title: 'How to Maintain Your Car’s Air Conditioning System',
        content: 'Learn how to keep your AC in good working condition to stay cool in the summer months.',
        topic: 'Car Maintenance',
        author: 'CoolCarExpert',
        media: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAvOKTDjxV3mC1wlK5_xnZot6d6wEfhrpSpA&s',
      },
      {
        title: 'Best Apps for Tracking Car Maintenance',
        content: 'What are the best apps to track car maintenance, repairs, and oil changes?',
        topic: 'Car Maintenance',
        author: 'TechieCar',
        media: 'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/road-construction-safety.webp ',
      },
      {
        title: 'What to Do in Case of a Car Accident?',
        content: 'Steps to take immediately after a car accident to ensure safety and follow legal procedures.',
        topic: 'Road Safety Tips',
        author: 'SafetyExpert',
        media: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWlZQpOS0LtUlRdq-wq_mE8xQfLuN_h7_lA&s ',
      },
      {
        title: 'How to Select the Best Car Insurance?',
        content: 'Tips on finding the best car insurance for your needs and budget.',
        topic: 'Auto Insurance',
        author: 'InsuranceGuru',
        media: 'https://autoaid.in/wp-content/uploads/2024/06/dl.beatsnoop.com-3000-D0FAnG6tM9-scaled.jpg ',
      },
      {
        title: 'The Future of Autonomous Vehicles',
        content: 'What’s next for self-driving cars? Explore the latest advancements in autonomous vehicle technology.',
        topic: 'Electric Cars',
        author: 'TechGuru',
        media: 'https://media.istockphoto.com/id/1060912048/photo/safety-first-road-sign-3d-rendering.jpg?s=612x612&w=0&k=20&c=RyK4aLs_bTjYlo5ld1ubOmMBfIX6923DyyjP4dprXmQ=',
      },
      
  ]);

  const topics = [
    'Engine Performance',
    'Car Accessories',
    'Winter Car Maintenance',
    'Road Safety Tips',
    'Fuel Efficiency',
    'Car Modifications',
    'Driving Tips',
    'Auto Insurance',
    'Electric Cars',
    'Car Cleaning and Detailing',
  ];

  const filteredPosts = selectedTopic
    ? posts.filter((post) => post.topic === selectedTopic)
    : posts;

  const [notification, setNotification] = useState('');

  const handleCreatePost = () => {
    if (newPostTitle && newPostContent) {
      const newPost = {
        title: newPostTitle,
        content: newPostContent,
        topic: selectedTopic || 'General',
        author: 'NewUser',
        media: newPostImage ? URL.createObjectURL(newPostImage) : null,
        comments: [],
      };
      setPosts([newPost, ...posts]);
      setNewPostTitle('');
      setNewPostContent('');
      setNewPostImage(null);
      setShowCreatePost(false);

      setNotification('Post created successfully!');
      setTimeout(() => setNotification(''), 3000);
    }
  };

  const handlePostClick = (title) => {
    alert(`You have entered the discussion: ${title}`);
  };

  const handleAddComment = (postIndex) => {
    if (commentText.trim()) {
      const updatedPosts = [...posts];
      updatedPosts[postIndex].comments.push(commentText);
      setPosts(updatedPosts);
      setCommentText('');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white py-10 px-5 md:px-20 font-sans mt-0">
      {/* Notification Section */}
      {notification && (
        <div className="fixed top-16 right-10 bg-green-500 mb-8 text-white py-2 px-4 rounded-lg shadow-lg transition duration-300">
          {notification}
        </div>
      )}
      <h1 className="text-5xl font-extrabold text-center text-yellow-400 mb-8"></h1>
      <h1 className="text-5xl font-extrabold text-center text-yellow-400 mb-8">COMMUNITY FORUM</h1>
      <p className="text-center text-gray-400 mb-8">Connect, discuss, and share your knowledge with fellow enthusiasts.</p>

      <div className="flex gap-10">
        {/* Left Sidebar for Topics */}
        <div className="w-1/4 bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">All Topics</h2>
          <ul className="space-y-4">
            {topics.map((topic, index) => (
              <li
                key={index}
                className="text-yellow-400 hover:text-yellow-500 cursor-pointer transition"
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section for Posts */}
        <div className="w-3/4">
          {/* Create Post Button */}
          <div className="flex justify-between mb-8">
            <button
              onClick={() => setShowCreatePost(!showCreatePost)}
              className="bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            >
              {showCreatePost ? 'Cancel' : 'Create Post'}
            </button>
          </div>

          {/* Create New Post Section */}
          {showCreatePost && (
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">CREATE NEW POST</h2>
              <input
                type="text"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                placeholder="Post Title"
                className="w-full bg-gray-700 text-white rounded p-4 mb-4 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              <textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="Write something interesting..."
                className="w-full bg-gray-700 text-white rounded p-4 mb-4 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                rows="4"
              ></textarea>
              <input
                type="file"
                onChange={(e) => setNewPostImage(e.target.files[0])}
                className="w-full bg-gray-700 text-white rounded p-4 mb-4 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              <button
                onClick={handleCreatePost}
                className="w-full bg-yellow-500 text-gray-900 font-semibold py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              >
                Post
              </button>
            </div>
          )}

          {/* Forum Posts */}
          <div className="space-y-8">
            {filteredPosts.map((post, postIndex) => (
              <div
                key={postIndex}
                className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300"
                onClick={() => handlePostClick(post.title)}
              >
                <h3 className="text-2xl font-bold text-white mb-2 uppercase">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.content}</p>
                {post.media && post.media.includes('video') ? (
                  <video controls className="w-full rounded-lg shadow-md mb-2" src={post.media}>
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  post.media && (
                    <img
                      src={post.media}
                      alt="Post Media"
                      className="w-full h-64 object-cover rounded-lg shadow-md mb-2" // Square Image
                    />
                  )
                )}
                <p className="text-yellow-400 text-sm font-semibold">By {post.author}</p>

                {/* Comments Section */}
                <div className="mt-4">
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Add a comment..."
                    className="w-full bg-gray-700 text-white rounded p-4 mb-4 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    rows="3"
                  ></textarea>
                  <button
                    onClick={() => handleAddComment(postIndex)}
                    className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  >
                    Add Comment
                  </button>

                  {/* Display Comments */}
                  <div className="mt-4">
                    {post.comments && post.comments.map((comment, index) => (
                      <div key={index} className="bg-gray-700 rounded-lg p-4 mb-2 text-white">
                        {comment}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Forum;
