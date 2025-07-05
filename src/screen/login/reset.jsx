import React from 'react';
import { Link } from 'react-router-dom';
import './reset.css';

function ResetPassword() {
  return (
    <div className="reset-page">
      <h1 className="titler">Reset Your Password</h1>

      <p className="subtitle">
        Enter your registered email address or username and we’ll send you a link to reset your password.
      </p>

      <input
        type="email"
        placeholder="Email address or username"
        className="reset-input"
      />

      <p className="resend-text">Resend Code</p>

      <button className="reset-btn">Send Link</button>

      <Link to="/login" className="back-btn">Back to Login</Link>
    </div>
  );
}

export default ResetPassword;


