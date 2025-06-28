import React from 'react';
import './Home.css';
import heroImg from '../assets/home_img.jpg'; 

function Home() {
  return (
    <section className="landing-section">
      <div className="landing-content">
        <h1><span>LIKE NATURE</span><br />BE CREATIVE!</h1>
        <p>
          Welcome to Mugai, your smart farming companion.<br />
          Monitor and control your fields with real-time insights.
          Join us in revolutionizing agriculture with technology.
        </p>
        <button className="info-btn">MORE INFO</button>

        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>

      <div className="landing-image">
        <img src={heroImg} alt="Nature" />
      </div>
    </section>
  );
}

export default Home;
