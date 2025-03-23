import React from 'react';
import { Search, Filter, Users, Clock } from 'lucide-react';

const classes = [
  {
    id: 1,
    subject: 'Advanced Mathematics',
    section: 'Section A',
    students: 28,
    duration: '1h 30m',
    image: 'https://picsum.photos/id/28/400/225',
  },
  {
    id: 2,
    subject: 'Physics Lab',
    section: 'Section B',
    students: 24,
    duration: '2h',
    image: 'https://picsum.photos/id/29/400/225',
  },
  {
    id: 3,
    subject: 'Chemistry Theory',
    section: 'Section A',
    students: 26,
    duration: '1h',
    image: 'https://picsum.photos/id/30/400/225',
  },
  {
    id: 4,
    subject: 'Biology Practical',
    section: 'Section C',
    students: 22,
    duration: '2h 30m',
    image: 'https://picsum.photos/id/31/400/225',
  },
];

export function ClassManagement() {
  return (
    <div>
      {/* Search and Filters */}
      <div className="mb-8 flex gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search classes..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A1B6D]/20"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2">
          <Filter size={20} />
          <span>Filters</span>
        </button>
      </div>

      {/* Class Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={classItem.image}
              alt={classItem.subject}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{classItem.subject}</h3>
              <p className="text-gray-500 mb-4">{classItem.section}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Users size={16} />
                  <span>{classItem.students} Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{classItem.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}