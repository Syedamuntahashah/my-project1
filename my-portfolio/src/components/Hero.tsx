
import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="profile-section">
          <Image
            src="/images/profile.jpeg"  
            alt="Profile Picture"
            className="profile-image"
            />
        </div>
        <div className="text-section">
          <h2 className="hero-section">Welcome to My Portfolio</h2>
          <p className="hero-section">I m Muntaha Shah a passionate web developer.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;