import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/auth-context';
import Navbar from './components/layout/navbar';
import AuthLayout from './components/layout/auth-layout';
import { ProtectedRoute } from './components/layout/protected-route';
import SignUp from './pages/auth/sign-up';
import Login from './pages/auth/login';
import Home from './pages/home';
import Notifications from './pages/notifications';
import Detector from './pages/detector';
import Insights from './pages/insights';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Auth Routes */}
            <Route element={<AuthLayout />}>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Route>

            {/* Protected Routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <>
                    <Home />
                    <Navbar />
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path="/notifications"
              element={
                <ProtectedRoute>
                  <>
                    <Notifications />
                    <Navbar />
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path="/detector"
              element={
                <ProtectedRoute>
                  <>
                    <Detector />
                    <Navbar />
                  </>
                </ProtectedRoute>
              }
            />
            <Route
              path="/insights"
              element={
                <ProtectedRoute>
                  <>
                    <Insights />
                    <Navbar />
                  </>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;