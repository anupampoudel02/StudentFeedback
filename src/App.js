import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPassword from './pages/ForgotPassword';
import VerifyOTP from './pages/VerifyOTP';
import AdminPage from './pages/AdminPage';
import CollaborativeDashboard from './pages/CollaborativeDashboard';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<CollaborativeDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
