import React from 'react';
import Hero from '../Hero';
import About from '../About';
import Testimonial from '../Testimonial';
import Footer from '../Footer';

import Accordion from '../Accordion';
import CommunitySection from '../CommunitySection';
import EventsShowcase from '../EventsShowcase';
import Memberslist from '../Memberslist';
import UserProfile from '../UserProfile';



const Home = () => {
  return (
    <div>
      <Hero />
      
      <About />

      <Testimonial/>
      <Accordion/>
      <EventsShowcase/>
      <CommunitySection/>
      <Memberslist/>
      
      
     
      <Footer/>
   
      
    </div>
  );
};

export default Home;
