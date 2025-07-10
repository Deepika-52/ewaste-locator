import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Welcome to E-Waste Locator</h1>
      <p className="text-lg text-green-700 mb-6">Find nearby recycling centers and dispose responsibly ♻️</p>
      <a href="/locator" className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
        📍 Locate Centers
      </a>
    </div>
  );
}