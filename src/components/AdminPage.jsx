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
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="right-panel">
        <div className="top-buttons">
          <Link to="/signup"><button className="outlined">Sign-up</button></Link>
          <Link to="/admin"><button className="outlined">Admin</button></Link>
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
          <p><Link to="/">Back to User Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
