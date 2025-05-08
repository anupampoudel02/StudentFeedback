import React, { useState } from 'react';
import './Auth.css'; 
import toast from 'react-hot-toast';
import http from '../request/http';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await http.post('/forgot-password', { email });

    if (res.status) {
      toast('Here is your toast.');
      setMessage('A reset password link has been sent to your email.');
      setError('');
    } else {
    }
  } catch (err) {
      if(axios.isAxiosError(err)) {
        setError(err.response.data.message|| 'Failed to send reset link.');
        setMessage('');
      } else {
        setError('Network error: Failed to send reset link.');
        setMessage('');
      }

  }
};

  return (
    <div className="auth-container">
      <div className="left-panel">
        <div className="branding">
          <img src="/Logo.png" alt="Silent Voice Logo" className="branding-logo" />
          <p>Silent Voice – Speak Freely, Improve Together</p>
        </div>
      </div>
      <div className="right-panel">
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-3 mb-4 border rounded-lg"
            required
          />
          <button className="submit-btn" type="submit">
            Send Reset Link
          </button>
        </form>
        {message && <p className="text-green-500">{message}</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
