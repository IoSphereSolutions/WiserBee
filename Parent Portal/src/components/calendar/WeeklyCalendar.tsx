import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WeeklyCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const timeSlots = Array.from({ length: 10 }, (_, i) => i + 7); // 7:00 - 16:00
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const formatTime = (hour: number) => {
    return `${hour.toString().padStart(2, '0')}:00`;
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 7 : -7));
    setCurrentDate(newDate);
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">Weekly Schedule</h1>
        <p className="text-gray-600 mt-1">View and manage your child's weekly activities</p>
      </div>

      {/* Calendar Navigation */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigateWeek('prev')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-lg font-semibold">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h2>
          <button
            onClick={() => navigateWeek('next')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Calendar Header */}
            <div className="grid grid-cols-[100px_repeat(5,1fr)] gap-2 mb-4">
              <div className="text-sm font-medium text-gray-500">Time</div>
              {days.map((day) => (
                <div key={day} className="text-sm font-medium text-gray-900 text-center">
                  {day}
                </div>
              ))}
            </div>

            {/* Time Slots */}
            {timeSlots.map((hour) => (
              <div
                key={hour}
                className="grid grid-cols-[100px_repeat(5,1fr)] gap-2 mb-2"
              >
                <div className="text-sm text-gray-500">{formatTime(hour)}</div>
                {days.map((day) => (
                  <div
                    key={`${day}-${hour}`}
                    className="h-12 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCalendar;