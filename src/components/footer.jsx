import React from 'react';
import './footer.css';
import blacklogo from 'C:/Users/WELCOME/Desktop/dataScience/my-app/src/assets/images/blacklogo.png'
import emaili from 'C:/Users/WELCOME/Desktop/dataScience/my-app/src/assets/images/emaili.png'

function Footer() {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-section feedback">
        <div className="brand-row">
          <img src={blacklogo} alt="CODYGROW Logo" className="footer-logo" />
          <h2 className="brand-name-footer">CODYGROW</h2>
        </div>
        <p>
          We Value Your Feedback! <br />
          If you have any feedback, complaints, or suggestions, we'd love to hear from you!
        </p>
        <div className="email-input-group">
          <input type="email" placeholder="Type Email" />
          <button>
            <img src={emaili} alt="Send" />
          </button>
        </div>
      </div>

      {/* Center Section */}
      <div className="footer-section links">
        <h3>Service Links</h3>
        <div className="link-columns">
          <ul>
            <li>&gt; about us</li>
            <li>&gt; services</li>
            <li>&gt; learn</li>
            <li>&gt; work</li>
          </ul>
          <ul>
            <li>&gt; social media</li>
            <li>&gt; customer care</li>
            <li>&gt; privacy</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="footer-section info">
        <h3>Information</h3>
        <p>Tel:</p>
        <p>Email:</p>
        <div className="social-icons">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
