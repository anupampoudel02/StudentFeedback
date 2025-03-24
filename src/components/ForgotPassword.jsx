import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="branding">
          <h1><span className="large-s">S</span><span className="voice">Voice</span><br /><span className="silent">ilent</span></h1>
          <p className="tagline">Unbiased and anonymous student reviews</p>
        </div>
      </div>

      <div className="right-panel">
        <div className="form-box">
          <h2>Forgot Password</h2>
          <form action="/verify-otp">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="submit-btn">Send OTP</button>
          </form>
          <p><Link to="/">Back to Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
