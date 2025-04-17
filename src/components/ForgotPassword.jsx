import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://surely-enabled-terrapin.ngrok-free.app/api/forgot-password', { email });
      setMessage('Check your email for password reset instructions');
    } catch (err) {
      setMessage('Failed to send reset instructions');
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
