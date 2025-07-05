import React, { useState } from "react";
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./signup.css";

export default function SignUp() {
  const [phone, setPhone] = useState("");

  return (
    <div className="signup-root">
      <div className="signup-container">
        <div className="signup-form-box">
          <h2 className="signup-title">Sign Up</h2>

          <div className="signup-form-grid">
            <div className="signup-input-group">
              <label htmlFor="fullname">Full Name</label>
              <input id="fullname" type="text" className="signup-input" />
            </div>

            <div className="signup-input-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" className="signup-input" />
            </div>

            <div className="signup-input-group">
              <label htmlFor="role">Organization / Role</label>
              <input id="role" type="text" className="signup-input" />
            </div>

            <div className="signup-input-group">
              <label>Phone Number</label>
              <PhoneInput
                country={'in'}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white'
                }}
                buttonStyle={{ border: 'none', background: 'transparent' }}
                dropdownStyle={{ color: 'black' }}
              />
            </div>

            <div className="signup-input-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" className="signup-input" />
            </div>

            <div className="signup-input-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input id="confirm-password" type="password" className="signup-input" />
            </div>
          </div>

          <div className="signup-gender-section">
            <label>Gender</label>
            <label><input type="radio" name="gender" /> Male</label>
            <label><input type="radio" name="gender" /> Female</label>
            <label><input type="radio" name="gender" /> Other</label>
            <label><input type="radio" name="gender" /> Prefer Not to Say</label>
          </div>

          <div className="signup-separator"><span>Or</span></div>

          <center>
            <button className="signup-google-button">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="signup-icon" />
              Sign up with Google
            </button>
          </center>

          <center>
            <button className="signup-submit-button">
              Sign Up
            </button>
          </center>

          <p className="signup-footer-text">
            Already have an Account? <Link className="signup-link" to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
