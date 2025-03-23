import React from 'react';
import { Search, Plus, FileText } from 'lucide-react';

const subjects = [
  {
    id: 1,
    name: 'Mathematics',
    grade: 'Grade 10',
    image: 'https://picsum.photos/id/24/400/500',
  },
  {
    id: 2,
    name: 'Physics',
    grade: 'Grade 11',
    image: 'https://picsum.photos/id/25/400/500',
  },
  {
    id: 3,
    name: 'Chemistry',
    grade: 'Grade 12',
    image: 'https://picsum.photos/id/26/400/500',
  },
];

export function PaperGeneration() {
  return (
    <div>
      {/* Action Bar */}
      <div className="mb-8 flex gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search subjects..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A1B6D]/20"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button className="px-4 py-2 bg-[#2A1B6D] text-white rounded-lg hover:bg-[#2A1B6D]/90 flex items-center gap-2">
          <Plus size={20} />
          <span>Generate New Paper</span>
        </button>
      </div>

      {/* Subject Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-64">
              <img
                src={subject.image}
                alt={subject.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold">{subject.name}</h3>
                  <p className="text-white/80">{subject.grade}</p>
                </div>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <button className="text-[#2A1B6D] hover:text-[#2A1B6D]/80 flex items-center gap-2">
                <FileText size={20} />
                <span>View Papers</span>
              </button>
              <button className="px-4 py-2 bg-[#2A1B6D] text-white rounded-lg hover:bg-[#2A1B6D]/90">
                Generate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}