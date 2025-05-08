import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GuestLayout from './GuestLayout.jsx';
import './Auth.css';
import http from '../request/http.js';
import axios from 'axios';

const LoginPage = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const payload = {
      email: formData.get('email'),
      password: formData.get('password')
    };

    setLoading(true);

    http.post('/login', payload).then((res) => {
      if(res.status === 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data));

        window.location.href = "/dashboard"
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
    <GuestLayout>
      <div className="container">
        <div className="left-panel">
          <div className="branding">
            <img src="/Logo.png" alt="Silent Voice Logo" className="branding-logo" />
            <div className="desc">
              <strong>Silent Voice – Speak Freely, Improve Together</strong>
              <p>Silent Voice is a secure and anonymous student feedback system designed to bridge the communication gap between students and educators.</p>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div className="top-buttons">
            <Link to="/signup"><button className="outlined">Sign-up</button></Link>
            <Link to="/admin"><button className="outlined">Admin</button></Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-box">
              <h2>Proceed To Login</h2>
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter Email" />
              {error.email && <span style={{ color: 'red' }}>{error.email}</span>}
              <label>Password</label>
              <input type="password" name="password" placeholder="Enter Password" />
              {error.password && <span style={{ color: 'red' }}>{error.password}</span>}
              <button className="submit-btn" style={{background: loading ? 'gray' : ''}} disabled={loading}>{loading ? 'Loading...' :  'Login'}</button>
              <p style={{ textAlign: 'center', marginTop: '10px' }}>
                <Link to="/forgot-password" style={{ fontSize: '0.9em' }}>Forgot Password?</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
};

export default LoginPage;
