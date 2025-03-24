import React from 'react';
import { Link } from 'react-router-dom';

const VerifyOTP = () => {
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
          <h2>Verify OTP</h2>
          <form action="/reset-password">
            <label>OTP</label>
            <input type="text" placeholder="Enter OTP" required />
            <button type="submit" className="submit-btn">Verify</button>
          </form>
          <p><Link to="/forgot-password">Resend OTP</Link></p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
