import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const LoginPage = () => {
  return (
    <div className="container">
      {/* LEFT PANEL */}
      <div className="left-panel">
  <div className="branding">
    <img src="/Logo.png" alt="Silent voice Logo" className="branding-logo" />

    <div className="desc">
      <strong>Silent Voice – Speak Freely, Improve Together</strong>
      <p>
        Silent Voice is a secure and anonymous student feedback system
        designed to bridge the communication gap between students and
        educators. It allows students to share their thoughts, concerns,
        and suggestions without revealing their identity, ensuring honest
        and constructive feedback.
      </p>
    </div>
  </div>
</div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="top-buttons">
          <Link to="/signup">
            <button className="outlined">Sign-up</button>
          </Link>
          <Link to="/admin">
            <button className="outlined">Admin</button>
          </Link>
        </div>

        <div className="form-box">
          <h2>Proceed To Login</h2>
          <label>Email</label>
          <input type="text" placeholder="Enter Email" />
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
          <button className="submit-btn">Login</button>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            <Link to="/forgot-password" style={{ fontSize: '0.9em' }}>Forgot Password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 
