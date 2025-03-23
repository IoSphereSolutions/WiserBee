import React from 'react';
import { BookOpen, Users, CheckSquare } from 'lucide-react';

const stats = [
  { label: 'My Lesson Plan', value: '1', icon: BookOpen },
  { label: 'My Classes', value: '6', icon: Users },
  { label: 'My Tasks', value: '0', icon: CheckSquare },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
            <div className="w-12 h-12 bg-[#2A1B6D]/10 rounded-lg flex items-center justify-center">
              <stat.icon size={24} className="text-[#2A1B6D]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}