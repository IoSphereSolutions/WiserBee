import React from 'react';

export function WelcomeBanner() {
  return (
    <div className="bg-gradient-to-r from-[#2A1B6D] to-[#4A90E2] rounded-xl p-8 text-white mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-white/80">Ready to start another productive day?</p>
        </div>
        <img
          src="https://picsum.photos/id/64/100/100"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-white/20 object-cover"
        />
      </div>
    </div>
  );
}