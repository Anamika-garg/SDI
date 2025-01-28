import React from 'react';
import { BarChart2, TrendingUp, Award, Battery } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = [
  { day: 'Mon', purified: 1200, efficiency: 85 },
  { day: 'Tue', purified: 1500, efficiency: 90 },
  { day: 'Wed', purified: 1100, efficiency: 82 },
  { day: 'Thu', purified: 1400, efficiency: 88 },
  { day: 'Fri', purified: 1300, efficiency: 86 },
  { day: 'Sat', purified: 900, efficiency: 80 },
  { day: 'Sun', purified: 800, efficiency: 78 },
];

const Insights = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-20 pt-6">
      <div className="flex items-center mb-6">
        <BarChart2 className="h-6 w-6 text-gray-900 mr-2" />
        <h1 className="text-2xl font-bold text-gray-900">Insights</h1>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <span className="text-xs text-gray-500">This Week</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">8.2k m³</p>
          <p className="text-sm text-gray-500">Total Air Purified</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <Award className="h-5 w-5 text-blue-500" />
            <span className="text-xs text-gray-500">Average</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">85%</p>
          <p className="text-sm text-gray-500">Purification Efficiency</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <Battery className="h-5 w-5 text-purple-500" />
            <span className="text-xs text-gray-500">This Month</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">45 kWh</p>
          <p className="text-sm text-gray-500">Energy Consumed</p>
        </div>
      </div>

      {/* Weekly Performance Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Performance</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="purified" fill="#10B981" name="Air Purified (m³)" />
              <Bar yAxisId="right" dataKey="efficiency" fill="#3B82F6" name="Efficiency (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Environmental Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Carbon Credits Earned</h3>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">124</span>
              <span className="text-sm text-gray-500 ml-2">credits</span>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Equivalent to planting 12 trees
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Energy Recovery</h3>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">85%</span>
              <span className="text-sm text-gray-500 ml-2">efficiency</span>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Saved 320 kWh this month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;