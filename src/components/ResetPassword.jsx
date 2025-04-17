import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // For capturing the token in the URL

const ResetPassword = () => {
  const { token } = useParams(); // Get the token from the URL
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      await axios.post('https://surely-enabled-terrapin.ngrok-free.app/api/reset-password', {
        token,
        password,
        password_confirmation: confirmPassword,
      });
      setMessage('Password reset successfully');
    } catch (err) {
      setMessage('Failed to reset password');
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
