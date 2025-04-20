import React from 'react';
import './Auth.css';

const VerifyOTP = () => {
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
