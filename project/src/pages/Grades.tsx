import React, { useState } from 'react';
import { Search, Filter, Users, Clock, GraduationCap } from 'lucide-react';

const grades = [
  {
    id: 1,
    subject: 'Advanced Mathematics',
    grade: 'A+',
    score: 95,
    section: 'Section A',
    students: 28,
    duration: '1h 30m',
    image: 'https://picsum.photos/id/28/400/225',
  },
  {
    id: 2,
    subject: 'Physics Lab',
    grade: 'A',
    score: 88,
    section: 'Section B',
    students: 24,
    duration: '2h',
    image: 'https://picsum.photos/id/29/400/225',
  },
  {
    id: 3,
    subject: 'Chemistry Theory',
    grade: 'A-',
    score: 85,
    section: 'Section A',
    students: 26,
    duration: '1h',
    image: 'https://picsum.photos/id/30/400/225',
  },
  {
    id: 4,
    subject: 'Biology Practical',
    grade: 'B+',
    score: 82,
    section: 'Section C',
    students: 22,
    duration: '2h 30m',
    image: 'https://picsum.photos/id/31/400/225',
  },
];

export function Grades() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      {/* Search and Filters */}
      <div className="mb-8 flex gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search grades..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A1B6D]/20"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2">
          <Filter size={20} />
          <span>Filters</span>
        </button>
      </div>

      {/* Grades Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {grades.map((gradeItem) => (
          <div
            key={gradeItem.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={gradeItem.image}
                alt={gradeItem.subject}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2A1B6D]">{gradeItem.grade}</div>
                  <div className="text-sm text-gray-600">{gradeItem.score}%</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{gradeItem.subject}</h3>
              <p className="text-gray-500 mb-4">{gradeItem.section}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Users size={16} />
                  <span>{gradeItem.students} Students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{gradeItem.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Summary */}
      <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <GraduationCap size={24} />
          Performance Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-[#2A1B6D]">87.5%</div>
            <div className="text-gray-500">Average Score</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-[#2A1B6D]">A</div>
            <div className="text-gray-500">Most Common Grade</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-[#2A1B6D]">4/4</div>
            <div className="text-gray-500">Subjects Completed</div>
          </div>
        </div>
      </div>
    </div>
  );
}