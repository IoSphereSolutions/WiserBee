import React from 'react';
import { Calendar, Clock, FileText } from 'lucide-react';

interface Exam {
  id: string;
  subject: string;
  date: string;
  time: string;
  duration: string;
  status: 'upcoming' | 'completed';
  score?: number;
}

const ExamPage: React.FC = () => {
  const exams: Exam[] = [
    {
      id: '1',
      subject: 'Mathematics',
      date: '2024-03-25',
      time: '09:00 AM',
      duration: '2 hours',
      status: 'upcoming'
    },
    {
      id: '2',
      subject: 'Science',
      date: '2024-03-20',
      time: '10:30 AM',
      duration: '1.5 hours',
      status: 'completed',
      score: 92
    },
    {
      id: '3',
      subject: 'English',
      date: '2024-03-15',
      time: '11:00 AM',
      duration: '2 hours',
      status: 'completed',
      score: 88
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">Exam Schedule</h1>
        <p className="text-gray-600 mt-1">View upcoming exams and past results</p>
      </div>

      {/* Upcoming Exams */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Exams</h2>
          <div className="space-y-4">
            {exams.filter(exam => exam.status === 'upcoming').map(exam => (
              <div key={exam.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900">{exam.subject}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {new Date(exam.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {exam.time}
                      </div>
                      <div className="flex items-center">
                        <FileText size={16} className="mr-1" />
                        {exam.duration}
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Upcoming
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Past Exams */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Past Exams</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {exams
                  .filter(exam => exam.status === 'completed')
                  .map(exam => (
                    <tr key={exam.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {exam.subject}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(exam.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {exam.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {exam.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {exam.score}%
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;