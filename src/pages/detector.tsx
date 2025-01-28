import React from 'react';
import { Activity, Power, Zap, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pollutants = [
  { name: 'PM2.5', value: 15, unit: 'µg/m³', status: 'Good', color: 'text-green-500' },
  { name: 'PM10', value: 45, unit: 'µg/m³', status: 'Moderate', color: 'text-yellow-500' },
  { name: 'CO2', value: 800, unit: 'ppm', status: 'Good', color: 'text-green-500' },
  { name: 'VOC', value: 0.8, unit: 'ppm', status: 'Good', color: 'text-green-500' },
];

const Detector = () => {
  const [isActive, setIsActive] = React.useState(true);
  const [intensity, setIntensity] = React.useState('medium');

  return (
    <div className="max-w-7xl mx-auto px-4 pb-20 pt-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Activity className="h-6 w-6 text-gray-900 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">Pollution Detector</h1>
        </div>
        <Button
          variant={isActive ? 'primary' : 'outline'}
          onClick={() => setIsActive(!isActive)}
        >
          <Power className="h-4 w-4 mr-2" />
          {isActive ? 'Active' : 'Inactive'}
        </Button>
      </div>

      {/* Current AQI */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Current Air Quality</h2>
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-green-100 mb-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600">55</p>
              <p className="text-sm text-green-600">AQI</p>
            </div>
          </div>
          <p className="text-lg font-medium text-green-600">Good</p>
          <p className="text-sm text-gray-500">Air quality is satisfactory</p>
        </div>
      </div>

      {/* Pollutant Levels */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {pollutants.map((pollutant) => (
          <div key={pollutant.name} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500">{pollutant.name}</p>
              <Gauge className={`h-5 w-5 ${pollutant.color}`} />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {pollutant.value}
              <span className="text-sm font-normal text-gray-500 ml-1">{pollutant.unit}</span>
            </p>
            <p className={`text-sm ${pollutant.color}`}>{pollutant.status}</p>
          </div>
        ))}
      </div>

      {/* Purifier Controls */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Purifier Controls</h2>
          <Zap className="h-5 w-5 text-yellow-500" />
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Purification Intensity</p>
            <div className="grid grid-cols-3 gap-2">
              {['low', 'medium', 'high'].map((level) => (
                <Button
                  key={level}
                  variant={intensity === level ? 'primary' : 'outline'}
                  onClick={() => setIntensity(level)}
                  className="capitalize"
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <p className="text-sm font-medium text-gray-900">Geofencing</p>
              <p className="text-xs text-gray-500">Automate based on location</p>
            </div>
            <Button variant="outline">Configure</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detector;