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
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="top-buttons">
          <button onClick={() => window.location.href = '/'}>Login</button>
          <button className="active">Sign-up</button>
          <button onClick={() => window.location.href = '/admin'}>Admin</button>
        </div>

        <div className="form-box">
          <h2>Sign Up</h2>
          <form>
            <label>Username</label>
            <input type="text" placeholder="Enter Username" required />

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