import React from 'react';

export default function InfoPage() {
  return (
    <div className="min-h-screen bg-green-100 p-6">
      <h2 className="text-2xl font-bold text-green-900 mb-4">What is E-Waste?</h2>
      <p className="mb-4">E-waste refers to discarded electronic appliances such as phones, laptops, TVs, and batteries.</p>
      <h3 className="text-xl font-semibold text-green-800 mt-4 mb-2">Why Recycle E-Waste?</h3>
      <ul className="list-disc list-inside">
        <li>Prevents toxic materials from polluting the environment</li>
        <li>Recovers valuable materials like gold, copper, and plastic</li>
        <li>Promotes sustainability and resource conservation</li>
      </ul>
    </div>
  );
}