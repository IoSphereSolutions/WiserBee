import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';

// Mock schedule data
const scheduleData = {
  'Monday-9': { subject: 'Mathematics', section: 'Section A', room: 'Room 101' },
  'Monday-11': { subject: 'Physics', section: 'Section B', room: 'Lab 201' },
  'Tuesday-10': { subject: 'Chemistry', section: 'Section A', room: 'Lab 202' },
  'Wednesday-14': { subject: 'Biology', section: 'Section C', room: 'Room 103' },
  'Thursday-9': { subject: 'English', section: 'Section B', room: 'Room 104' },
  'Friday-13': { subject: 'History', section: 'Section A', room: 'Room 105' },
};

const timeSlots = Array.from({ length: 9 }, (_, i) => i + 8); // 8 AM to 4 PM

export function ClassSchedule() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 }); // Start from Monday

  const days = Array.from({ length: 5 }, (_, i) => addDays(weekStart, i));

  const getScheduleKey = (day: Date, hour: number) => {
    return `${format(day, 'EEEE')}-${hour}`;
  };

  const navigateWeek = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => addDays(prev, direction === 'prev' ? -7 : 7));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Week Navigation */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Class Schedule</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigateWeek('prev')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <span className="font-medium">
            {format(weekStart, 'MMMM d')} - {format(addDays(weekStart, 4), 'MMMM d, yyyy')}
          </span>
          <button
            onClick={() => navigateWeek('next')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Schedule Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header Row */}
          <div className="grid grid-cols-[100px_repeat(5,1fr)] gap-2 mb-2">
            <div className="p-2 font-medium text-gray-500">Time</div>
            {days.map(day => (
              <div
                key={day.toString()}
                className={`p-2 text-center font-medium ${
                  isSameDay(day, new Date()) ? 'bg-[#2A1B6D] text-white rounded-lg' : ''
                }`}
              >
                <div>{format(day, 'EEEE')}</div>
                <div className="text-sm">{format(day, 'MMM d')}</div>
              </div>
            ))}
          </div>

          {/* Time Slots */}
          {timeSlots.map(hour => (
            <div
              key={hour}
              className="grid grid-cols-[100px_repeat(5,1fr)] gap-2 mb-2"
            >
              <div className="p-2 font-medium text-gray-500">
                {hour % 12 || 12}:00 {hour >= 12 ? 'PM' : 'AM'}
              </div>
              {days.map(day => {
                const scheduleKey = getScheduleKey(day, hour);
                const classInfo = scheduleData[scheduleKey as keyof typeof scheduleData];

                return (
                  <div
                    key={`${day}-${hour}`}
                    className={`p-2 rounded-lg ${
                      classInfo
                        ? 'bg-[#2A1B6D]/10 border border-[#2A1B6D]/20'
                        : 'border border-gray-100'
                    }`}
                  >
                    {classInfo && (
                      <div>
                        <div className="font-medium text-[#2A1B6D]">
                          {classInfo.subject}
                        </div>
                        <div className="text-sm text-gray-500">
                          {classInfo.section}
                        </div>
                        <div className="text-sm text-gray-500">{classInfo.room}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}