import React, { useState } from 'react';
import './Auth.css'; // Ensure that the correct shared CSS is imported

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., API call)
    console.log({ fullName, email, password });
  };

  return (
    <div className="auth-container">
      {/* LEFT PANEL */}
      <div className="left-panel">
        <div className="branding">
          <img src="/Logo.png" alt="AnonEdu Logo" className="branding-logo" />
          <div className="desc">
            <strong>Silent Voice – Speak Freely, Improve Together</strong>
            <p>
              Silent Voice is a secure and anonymous student feedback system designed to bridge the communication gap between students and educators. It allows students to share their thoughts, concerns, and suggestions without revealing their identity, ensuring honest and constructive feedback.
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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;


