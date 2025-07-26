import React from 'react';
import { LineChart, BarChart, Activity, TrendingUp, Award } from 'lucide-react';

interface Subject {
  name: string;
  score: number;
  average: number;
  improvement: number;
}

const PerformancePage: React.FC = () => {
  const subjects: Subject[] = [
    {
      name: 'Mathematics',
      score: 92,
      average: 85,
      improvement: 8
    },
    {
      name: 'Science',
      score: 88,
      average: 82,
      improvement: 5
    },
    {
      name: 'English',
      score: 90,
      average: 84,
      improvement: 4
    },
    {
      name: 'History',
      score: 85,
      average: 80,
      improvement: 6
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">Academic Performance</h1>
        <p className="text-gray-600 mt-1">Track your child's progress across all subjects</p>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Overall Grade</p>
              <h3 className="text-2xl font-semibold mt-1">A-</h3>
            </div>
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
              <Award className="text-purple-500" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Average Score</p>
              <h3 className="text-2xl font-semibold mt-1">88.75%</h3>
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <Activity className="text-blue-500" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Improvement</p>
              <h3 className="text-2xl font-semibold mt-1">+5.75%</h3>
            </div>
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-green-500" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Performance Graph */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Performance Trend</h2>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                <LineChart size={20} />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg">
                <BarChart size={20} />
              </button>
            </div>
          </div>
          <div className="h-[300px] flex items-center justify-center text-gray-500">
            Performance graph will be implemented here
          </div>
        </div>
      </div>

      {/* Subject-wise Performance */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Subject Performance</h2>
          <div className="space-y-4">
            {subjects.map(subject => (
              <div key={subject.name} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{subject.name}</h3>
                  <span className="text-sm font-medium text-gray-900">{subject.score}%</span>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        Class Average: {subject.average}%
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-green-600">
                        +{subject.improvement}% Improvement
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
                    <div
                      style={{ width: `${subject.score}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformancePage;