import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div className="container">
      <div className="left-panel">
        <div className="branding">
          <h1><span className="large-s">S</span><span className="voice">Voice</span><br /><span className="silent">ilent</span></h1>
          <p className="tagline">Unbiased and anonymous student reviews</p>
        </div>
      </div>

      <div className="right-panel">
        <div className="form-box">
          <h2>Reset Password</h2>
          <form action="/">
            <label>New Password</label>
            <input type="password" placeholder="Enter new password" required />
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm new password" required />
            <button type="submit" className="submit-btn">Reset Password</button>
          </form>
          <p><Link to="/">Back to Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
