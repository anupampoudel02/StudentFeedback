import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Auth.css';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://surely-enabled-terrapin.ngrok-free.app/api/reset-password', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, password_confirmation: confirm, token }),
      });
      setMessage('Password reset successful.');
      window.location.href="/login"
    } catch (err) {
      setMessage('Password reset failed.');
    }
  };

  useEffect(() => {
     if(searchParams.get('email')) {
      setEmail(searchParams.get('email'))
     }
  }, [searchParams])

  return (
    <div className="auth-container">
      <div className="left-panel">
        <div className="branding">
          <img src="/Logo.png" alt="Silent Voice Logo" className="branding-logo" />
          <p>Silent Voice – Speak Freely, Improve Together</p>
        </div>
      </div>
      <div className="right-panel">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" />
          <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Confirm Password" />
          <button className="submit-btn" type="submit">Reset Password</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
