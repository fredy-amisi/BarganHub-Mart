import React from 'react';
import { FaWifi, FaShoppingCart, FaCheckCircle, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Banner from '../Components/Banner';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Reviews from './Reviews';

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section id="home">
    <Banner />
  </section>
  <section id="about">
    <About />
  </section>
  <section id="services">
    <Services />
  </section>
  <section id="reviews">
    <Reviews />
  </section>

  <section id="contact">
    <Contact />
  </section>
    </div>
  );
};

export default Home;
