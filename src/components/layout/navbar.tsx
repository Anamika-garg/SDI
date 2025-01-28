import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Bell, Activity, BarChart2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/notifications', icon: Bell, label: 'Notifications' },
    { to: '/detector', icon: Activity, label: 'Detector' },
    { to: '/insights', icon: BarChart2, label: 'Insights' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between py-2">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center p-2 text-sm',
                  isActive
                    ? 'text-green-600'
                    : 'text-gray-600 hover:text-green-600'
                )
              }
            >
              <Icon className="h-6 w-6" />
              <span className="mt-1">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;