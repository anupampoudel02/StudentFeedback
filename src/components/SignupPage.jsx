import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import http from '../request/http';
import './Auth.css';

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation'),
    };

    http.post('/register', payload).then((res) => {
      if(res.status) {
        navigate('/login');
      }
    })
      .catch(err => {
        if(axios.isAxiosError(err)) {
          if(err.response.data) {
            setError(err.response.data.errors);  
          }
        }
      })
      .finally(() => setLoading(false))
  };

  return (
    <div className="auth-container">
      <div className="left-panel">
        <div className="branding">
          <img src="/Logo.png" alt="Silent Voice Logo" className="branding-logo" />
          <p>Silent Voice - Speak Freely, Improve Together</p>
        </div>
      </div>
      <div className="right-panel">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" />
          {error.name && <span style={{ color: 'red' }}>{error.name}</span>}
          <input name="email" placeholder="Email" />
          {error.email && <span style={{ color: 'red' }}>{error.email}</span>}
          <input name="password" type="password" placeholder="Password" />
          {error.password && <span style={{ color: 'red' }}>{error.password}</span>}
          <input name="password_confirmation" type="password" placeholder="Confirm Password" />
          <button className="submit-btn" disabled={loading}>Register</button>
        </form>
          <Link to="/login">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default SignupPage;
