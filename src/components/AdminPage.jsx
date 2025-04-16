import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'; // Make sure you're importing the shared CSS

const AdminPage = () => {
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
          <Link to="/signup"><button className="outlined">Sign-up</button></Link>
          <Link to="/"><button className="outlined">Sign-in</button></Link>
        </div>

        <div className="form-box">
          <h2>Admin Login</h2>
          <form>
            <label>Admin ID</label>
            <input type="text" placeholder="Enter Admin ID" required />
            <label>Password</label>
            <input type="password" placeholder="Enter Password" required />
            <button type="submit" className="submit-btn">Login</button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
