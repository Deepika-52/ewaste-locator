import React from 'react';

export default function LocatorPage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Nearby E-Waste Centers</h2>
      <div className="w-full h-[400px] bg-gray-300 flex items-center justify-center rounded-lg shadow-inner">
        {/* Placeholder for Google Maps API */}
        <span className="text-gray-600">Map will appear here</span>
      </div>
    </div>
  );
}