import React from 'react';
import './Auth.css';

const ResetPassword = () => {
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
          <h2>Reset Password</h2>
          <form>
            <label>New Password</label>
            <input type="password" placeholder="Enter New Password" required />
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
