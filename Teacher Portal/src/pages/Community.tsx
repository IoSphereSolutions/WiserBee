import React from 'react';
import { Search, Send, Smile, Paperclip } from 'lucide-react';

const messages = [
  {
    id: 1,
    sender: 'John Smith',
    role: 'Teacher',
    message: 'Has anyone used the new physics simulation software?',
    time: '10:30 AM',
    avatar: 'https://picsum.photos/id/64/40/40',
  },
  {
    id: 2,
    sender: 'Sarah Johnson',
    role: 'Student',
    message: 'Yes, it\'s really helpful for understanding wave motion!',
    time: '10:32 AM',
    avatar: 'https://picsum.photos/id/65/40/40',
  },
  {
    id: 3,
    sender: 'David Wilson',
    role: 'Parent',
    message: 'My daughter mentioned it helped improve her test scores.',
    time: '10:35 AM',
    avatar: 'https://picsum.photos/id/66/40/40',
  },
];

export function Community() {
  return (
    <div className="flex gap-6 h-[calc(100vh-140px)]">
      {/* Users List */}
      <div className="w-80 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A1B6D]/20"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
        <div className="overflow-y-auto">
          {messages.map((message) => (
            <button
              key={message.id}
              className="w-full p-4 hover:bg-gray-50 flex items-center gap-3 border-b"
            >
              <img
                src={message.avatar}
                alt={message.sender}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{message.sender}</span>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{message.message}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white rounded-xl shadow-sm flex flex-col">
        <div className="p-4 border-b">
          <h2 className="font-bold">Community Chat</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex gap-3">
              <img
                src={message.avatar}
                alt={message.sender}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{message.sender}</span>
                  <span className="text-xs text-gray-500">{message.role}</span>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
                <p className="text-gray-700 mt-1">{message.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full pl-4 pr-20 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A1B6D]/20"
              />
              <div className="absolute right-2 top-2 flex gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Smile size={20} className="text-gray-400" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Paperclip size={20} className="text-gray-400" />
                </button>
              </div>
            </div>
            <button className="p-2 bg-[#2A1B6D] text-white rounded-lg hover:bg-[#2A1B6D]/90">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}