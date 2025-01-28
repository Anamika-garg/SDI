import React from 'react';
import { Outlet } from 'react-router-dom';
import { Wind } from 'lucide-react';

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <Wind className="h-10 w-10 text-green-600" />
          <h1 className="text-3xl font-bold text-gray-900 ml-2">AirPure</h1>
        </div>
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;