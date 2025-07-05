import React from 'react';
import { Link } from 'react-router-dom';
import './loginpage.css';

function LoginPage() {
  return (
    <div className="loginpage-root">
      <div className="login-container">
        <div className="login-left">
          <div className="login-text-wrapper">
            <center>
              <h1 className="login-highlight">Welcome back to CODYGROW!</h1>
              <p className="login-subtext">Let's make data science effortless.</p>
            </center>
          </div>
        </div>
        <div className="login-right">
          <div className="login-form-card">
            <h2 className="login-title">Login</h2>

            <div className="login-input-group">
              <label htmlFor="username">Username / Email</label>
              <input id="username" type="text" />
            </div>

            <div className="login-input-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" />
            </div>

            <div className="login-options">
              <label><input type="checkbox" /> Remember me</label>
              <a href="/reset">Forgot Password?</a>
            </div>

            <div className="login-google-buttons">
              <button className="login-google-btn">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
              </button>
              <button className="login-google-btn">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
              </button>
            </div>

            <center>
              <button className="login-submit-btn">Login</button>
            </center>
            <p className="login-register-link">
              Don't Have an Account? <Link to="/signup"><span>Register</span></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
