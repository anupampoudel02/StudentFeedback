import React from 'react';
import './Auth.css';

const VerifyOTP = () => {
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
          <h2>Verify OTP</h2>
          <form>
            <label>Enter OTP</label>
            <input type="text" placeholder="Enter the OTP sent to your email" required />
            <button type="submit">Verify</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
