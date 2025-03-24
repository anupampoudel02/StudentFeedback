import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'; // Make sure you're importing the shared CSS

const AdminPage = () => {
  return (
    <div className="container">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <div className="branding">
          <h1>
            <span className="large-s">S</span><span className="voice">Voice</span><br />
            <span className="silent">ilent</span>
          </h1>
          <p className="tagline">Unbiased and anonymous student reviews</p>
          <div className="desc">
            <strong>Admin Access – Manage Feedback Securely</strong>
            <p>
              This portal is for authorized administrators only. Monitor, manage, and respond to
              anonymous student feedback with full confidentiality and accountability.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="form-box">
          <h2>Admin Login</h2>
          <form>
            <label>Admin ID</label>
            <input type="text" placeholder="Enter Admin ID" required />
            <label>Password</label>
            <input type="password" placeholder="Enter Password" required />
            <button type="submit" className="submit-btn">Login</button>
          </form>
          <p><Link to="/">Back to User Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
