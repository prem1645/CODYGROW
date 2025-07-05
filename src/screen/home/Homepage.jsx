import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import phcode from 'C:/Users/WELCOME/Desktop/dataScience/my-app/src/assets/images/phcode.png';
import videoImg from 'C:/Users/WELCOME/Desktop/dataScience/my-app/src/assets/images/video.png';
import tune from 'C:/Users/WELCOME/Desktop/dataScience/my-app/src/assets/images/tune.png';
import ai from 'C:/Users/WELCOME/Desktop/dataScience/my-app/src/assets/images/ai.png';
import symbol from 'C:/Users/WELCOME/Desktop/dataScience/my-app/src/assets/images/symbols.png';
import './homepage.css';

function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empower your <br /> data with <br /> CODYGROW</h1>
          <p>
            Welcome to CODYGROW, the revolutionary web platform designed to enhance
            the efficiency of data scientists by providing pre-built programs...
          </p>
          <div className="btn-group">
            <button>Learn</button>
            <button>Studio</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-right">
          <h2>About CODYGROW</h2>
          <p>
            CODYGROW reduces the burden of repetitive tasks, enabling users
            to upload data, select functionalities, and receive output with
            minimal coding. This makes advanced data science accessible to beginners.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>SERVICES</h2>
        <div className="services-wrapper">
          {/* Top Row */}
          <div className="services-row top-row">
            <div className="service-item">
              <button className="circle-btn">
                <img src={videoImg} alt="Video Lecture" />
              </button>
              <span>Video Lecture</span>
            </div>
            <div className="service-item">
              <button className="circle-btn">
                <img src={phcode} alt="Code for Learners" />
              </button>
              <span>Code (for learners)</span>
            </div>
            <div className="service-item">
              <button className="circle-btn">
                <img src={symbol} alt="Output" />
              </button>
              <span>Output</span>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="services-row bottom-row">
            <div className="service-item">
              <button className="circle-btn">
                <img src={ai} alt="AI Services" />
              </button>
              <span>AI Services</span>
            </div>
            <div className="service-item">
              <button className="circle-btn">
                <img src={tune} alt="Tune Program" />
              </button>
              <span>Tune the Program</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;












