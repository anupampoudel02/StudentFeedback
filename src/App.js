import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ForgotPassword from './components/ForgotPassword';
import VerifyOTP from './components/VerifyOTP';
import ResetPassword from './components/ResetPassword';
import AdminPage from './components/AdminPage';
import Dashboard from './components/Dashboard';
import './components/Auth.css';
import  { Toaster } from 'react-hot-toast';

function App() {
  return ( <>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    <Toaster />

  </>
  );
}

export default App;
