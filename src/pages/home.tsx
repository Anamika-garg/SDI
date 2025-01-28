import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Wind, Droplets, Gauge, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mockData = [
  { time: '00:00', aqi: 50, pm25: 12, pm10: 25 },
  { time: '04:00', aqi: 75, pm25: 15, pm10: 30 },
  { time: '08:00', aqi: 100, pm25: 20, pm10: 40 },
  { time: '12:00', aqi: 60, pm25: 14, pm10: 28 },
  { time: '16:00', aqi: 45, pm25: 10, pm10: 22 },
  { time: '20:00', aqi: 55, pm25: 13, pm10: 26 },
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-20 pt-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Air Quality Dashboard</h1>
        <Button variant="outline" size="sm">
          <Wind className="h-4 w-4 mr-2" />
          Purifier Active
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Current AQI</p>
              <p className="text-2xl font-bold text-green-600">55</p>
            </div>
            <Gauge className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">PM2.5</p>
              <p className="text-2xl font-bold text-blue-600">13</p>
            </div>
            <Droplets className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Air Purified</p>
              <p className="text-2xl font-bold text-purple-600">2.5k m³</p>
            </div>
            <Wind className="h-8 w-8 text-purple-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Carbon Offset</p>
              <p className="text-2xl font-bold text-emerald-600">12kg</p>
            </div>
            <Leaf className="h-8 w-8 text-emerald-500" />
          </div>
        </div>
      </div>

      {/* Air Quality Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Air Quality Trends</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="aqi" stroke="#10B981" name="AQI" />
              <Line type="monotone" dataKey="pm25" stroke="#3B82F6" name="PM2.5" />
              <Line type="monotone" dataKey="pm10" stroke="#8B5CF6" name="PM10" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Purification Progress */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Purification Progress</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Daily Goal</span>
              <span className="text-sm font-medium text-gray-700">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">Filter Life</span>
              <span className="text-sm font-medium text-gray-700">90%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;