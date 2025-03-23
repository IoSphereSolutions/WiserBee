import React from 'react';
import { Bell, Globe, ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <header className="h-[70px] bg-white border-b fixed top-0 right-0 left-72 z-10">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex-1" />
        
        <div className="flex items-center space-x-6">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Globe size={20} />
            <span>EN</span>
            <ChevronDown size={16} />
          </button>
          
          <div className="flex items-center space-x-3">
            <img
              src="https://picsum.photos/id/64/40/40"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-500">Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}