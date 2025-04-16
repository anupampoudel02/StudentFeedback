import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import VerifyOTP from './components/VerifyOTP';

const App = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
    </Routes>
  );
};

export default App;
