import React from 'react';
import { Bell, ChevronLeft, Globe, Menu, User } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  collapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, collapsed }) => {
  return (
    <header className="h-[60px] bg-white border-b border-gray-200 px-4 flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={onToggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
          <Globe size={20} />
          <span className="text-sm">EN</span>
        </button>
        <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
          <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
            <img
              src="https://picsum.photos/32/32"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-medium">John Doe</span>
        </button>
      </div>
    </header>
  );
};

export default Header;