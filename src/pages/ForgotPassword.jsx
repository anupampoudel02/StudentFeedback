import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';


const ForgotPassword = () => {
  return (
    <div className="container">
       {/* LEFT PANEL */}
       <div className="left-panel">
  <div className="branding">
    <img src="/Logo.png" alt="AnonEdu Logo" className="branding-logo" />

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
