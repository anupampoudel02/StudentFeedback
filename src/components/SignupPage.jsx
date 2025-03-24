import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
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
          <h2>Create an Account</h2>
          <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" required />
            <button type="submit" className="submit-btn">Sign Up</button>
          </form>
          <p><Link to="/">Back to Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
