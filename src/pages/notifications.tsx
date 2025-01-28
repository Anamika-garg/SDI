import React from 'react';
import { Bell, AlertTriangle, CheckCircle, Info, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const notifications = [
  {
    id: 1,
    type: 'warning',
    title: 'High AQI Detected',
    message: 'Air quality index has exceeded normal levels in your area.',
    time: '2 minutes ago',
    icon: AlertTriangle,
    color: 'text-yellow-500',
  },
  {
    id: 2,
    type: 'success',
    title: 'Filter Replacement Complete',
    message: 'Your air purifier filter has been successfully replaced.',
    time: '1 hour ago',
    icon: CheckCircle,
    color: 'text-green-500',
  },
  {
    id: 3,
    type: 'info',
    title: 'Energy Saving Mode Active',
    message: 'Your purifier has switched to energy saving mode.',
    time: '3 hours ago',
    icon: Info,
    color: 'text-blue-500',
  },
  {
    id: 4,
    type: 'maintenance',
    title: 'Maintenance Required',
    message: 'Schedule a maintenance check for optimal performance.',
    time: '1 day ago',
    icon: RefreshCw,
    color: 'text-purple-500',
  },
];

const Notifications = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-20 pt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Bell className="h-6 w-6 text-gray-900 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
        </div>
        <Button variant="outline" size="sm">
          Mark all as read
        </Button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className="bg-white rounded-lg shadow-sm p-4 transition-all hover:shadow-md"
            >
              <div className="flex items-start">
                <div className={`${notification.color} shrink-0 mr-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                    <p className="text-xs text-gray-500 ml-2">{notification.time}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{notification.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;