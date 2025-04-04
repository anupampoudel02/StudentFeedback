import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import './Auth.css'; // Make sure you're importing the shared CSS

const SignupPage = () => {
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
        <div className="top-buttons">
          <button onClick={() => window.location.href = '/'}>Login</button>
          <button onClick={() => window.location.href = '/admin'}>Admin</button>
        </div>

        <div className="form-box">
          <h2>Sign Up</h2>
          <form>
            <label>Full Name</label>
            <input type="text" placeholder="Enter Full Name" required />

            <label>Email</label>
            <input type="email" placeholder="Enter Email" required />

            <label>Password</label>
            <input type="password" placeholder="Create Password" required />

            <button type="submit" className="submit-btn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;