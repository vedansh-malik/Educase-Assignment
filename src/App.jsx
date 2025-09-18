import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const LoginPage = lazy(() => import('./pages/LoginPage'));
const WelcomePage = lazy(() => import('./pages/WelcomePage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const AccountPage = lazy(() => import('./pages/AccountPage'));

export default function App() {
  return (
    
      <Router>
        <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <Routes>
            <Route path="/" element={ <WelcomePage /> } />
            <Route path="/login" element={  <LoginPage /> } />
            <Route path="/signup" element={  <SignupPage /> } />
            <Route path="/account" element={  <AccountPage /> } />
          </Routes>
        
        </div>
        </Suspense>
      </Router>
    
  );
}
