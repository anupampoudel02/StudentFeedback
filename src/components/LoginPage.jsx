import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'; // assuming your CSS file is named Auth.css

const LoginPage = () => {
  return (
    <div className="container">
 <div className="left-panel">
  <div className="branding updated-branding">
    <img src="/Logo.png" alt="AnonEdu Logo" className="branding-logo" />

    <p className="branding-tagline">
      Unbiased and anonymous student reviews
    </p>

    <div className="branding-desc">
      <strong className="branding-title">
        Silent Voice – Speak Freely, Improve Together
      </strong>
      <p className="branding-text">
        AnonEdu is a secure and anonymous student feedback system designed to bridge the
        communication gap between students and educators. It allows students to share their thoughts,
        concerns, and suggestions without revealing their identity, ensuring honest and constructive
        feedback.
      </p>
    </div>
  </div>
</div>




      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="top-buttons">
          <button className="active" onClick={() => window.location.href = '/signup'}>Sign-up</button>
          <button onClick={() => window.location.href = '/admin'}>Admin</button>
        </div>

        <div className="form-box">
          <h2>Proceed To Login</h2>
          <label>Username</label>
          <input type="text" placeholder="Enter Username" />
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />

          <div style={{ textAlign: 'right', margin: '5px 0' }}>
            <Link to="/forgot-password" style={{ fontSize: '0.9em' }}>Forgot Password?</Link>
          </div>

          <button className="submit-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
