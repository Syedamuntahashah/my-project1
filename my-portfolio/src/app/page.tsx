
import React from "react";
import '../styles/custom.css';  
import Header from '../components/Header';  
import Hero from '../components/Hero';  
import About from '../components/About';  
import Contact from '../components/Contact';  
import Projects from '../components/Projects';  
import Footer from '../components/Footer';  

const Page = () => {
  return (
    <div className="portfolio">
      <Header />

      <div className="main-content">
        <div className="profile-section">
          <Hero />
        </div>

        <div className="about-section">
          <About />
        </div>

        <div className="projects-section">
          <Projects />
        </div>

        
        <div className="contact-section">
          <Contact />
        </div>


        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;