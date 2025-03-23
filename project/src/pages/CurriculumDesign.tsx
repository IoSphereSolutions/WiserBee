import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

const topics = [
  'Mathematics Fundamentals',
  'Advanced Algebra',
  'Geometry Basics',
  'Calculus Introduction',
  'Statistics and Probability',
  'Physics Core Concepts',
  'Chemistry Essentials',
  'Biology Foundations',
];

export function CurriculumDesign() {
  return (
    <div className="flex gap-6">
      {/* Topics Panel */}
      <div className="w-64 bg-white rounded-xl shadow-sm p-4">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search topics..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A1B6D]/20"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <div className="space-y-2">
          {topics.map((topic) => (
            <button
              key={topic}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center justify-between group"
            >
              <span>{topic}</span>
              <ChevronRight
                size={16}
                className="opacity-0 group-hover:opacity-100 text-gray-400"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-2xl font-bold mb-6">Our Vision</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-4">
            Our curriculum is designed to empower students with comprehensive knowledge
            and practical skills necessary for success in the modern world. We believe
            in a holistic approach to education that combines traditional academic
            excellence with innovative teaching methods.
          </p>
          <p className="text-gray-600 mb-4">
            Through carefully structured learning pathways, we ensure that students
            develop not only subject expertise but also critical thinking,
            problem-solving abilities, and creative expression. Our curriculum
            integrates technology, hands-on learning experiences, and real-world
            applications to create engaging and effective educational experiences.
          </p>
          <h2 className="text-xl font-bold mt-6 mb-4">Key Objectives</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Foster critical thinking and analytical skills</li>
            <li>Promote collaborative learning and communication</li>
            <li>Integrate technology and digital literacy</li>
            <li>Develop problem-solving capabilities</li>
            <li>Encourage creativity and innovation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}