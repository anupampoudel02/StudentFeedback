import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'; // Ensure it's linked correctly

const ForgotPassword = () => {
  return (
    <div className="container">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <div className="branding">
          <img src="/Logo.png" alt="AnonEdu Logo" className="branding-logo" />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="form-box">
          <h2>Forgot Password</h2>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <button className="submit-btn">Send OTP</button>

          {/* Back to Login Link */}
          <p style={{ marginTop: '15px', textAlign: 'center' }}>
            <Link to="/">Back to Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
