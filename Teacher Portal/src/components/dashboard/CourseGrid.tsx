import React from 'react';
import { Clock, Users } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Mathematics',
    section: 'Section A',
    students: 32,
    duration: '1h 30m',
    image: 'https://picsum.photos/id/20/400/225',
  },
  {
    id: 2,
    title: 'Physics',
    section: 'Section B',
    students: 28,
    duration: '1h 45m',
    image: 'https://picsum.photos/id/21/400/225',
  },
  {
    id: 3,
    title: 'Chemistry',
    section: 'Section A',
    students: 30,
    duration: '2h',
    image: 'https://picsum.photos/id/22/400/225',
  },
];

export function CourseGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-500 mb-4">{course.section}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Users size={16} />
                <span>{course.students} Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}