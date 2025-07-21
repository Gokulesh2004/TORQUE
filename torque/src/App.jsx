import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Homepage/Home'; 
import Hero from './components/Hero';
import About from './components/About';

import Blog from './components/Blog';
import Blogpost from './components/Blogpost';
import Testimonial from './components/Testimonial';
import Team from './components/Team';

import EventSection from './components/EventSection';
import Shop from './components/shop/Shop';
import UserProfile from './components/UserProfile';
import Forum from './components/Forum';
import AdminPage from './components/AdminPage';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hero" element={<Hero />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogpost" element={<Blogpost />} />
       
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/event" element={<EventSection />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/admin" element={<AdminPage />} />
       
        

        
     
        
        
       
        
        <Route path="/" element={<Home />} />




        
      </Routes>
    </Router>
  );
}

export default App;
