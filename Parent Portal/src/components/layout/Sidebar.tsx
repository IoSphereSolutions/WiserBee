import React from 'react';
import { 
  LayoutDashboard, 
  GraduationCap, 
  CreditCard, 
  LineChart, 
  ClipboardList,
  Calendar,
  Settings,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  collapsed: boolean;
  onPageChange: (page: string) => void;
  currentPage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onPageChange, currentPage }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', id: 'dashboard' },
    { icon: GraduationCap, label: 'Exam', id: 'exam' },
    { icon: CreditCard, label: 'Fees & Dues', id: 'fees' },
    { icon: LineChart, label: 'Performance', id: 'performance' },
    { icon: ClipboardList, label: 'Parental Survey', id: 'survey' },
    { icon: Calendar, label: 'Calendar', id: 'calendar' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ];

  return (
    <aside 
      className={`fixed left-0 top-0 h-screen bg-[#2D1F41] transition-all duration-300 ${
        collapsed ? 'w-[60px]' : 'w-[250px]'
      }`}
    >
      <div className="flex items-center h-[60px] px-4">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <GraduationCap className="text-[#2D1F41]" size={20} />
        </div>
        {!collapsed && (
          <span className="ml-3 text-white font-semibold">Parent Portal</span>
        )}
      </div>

      <nav className="mt-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`w-full flex items-center h-[50px] px-4 text-gray-300 hover:bg-white/10 transition-colors ${
              currentPage === item.id ? 'bg-white/10 text-white' : ''
            }`}
          >
            <item.icon size={20} />
            {!collapsed && <span className="ml-3">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-4 w-full px-4">
        <button
          className="w-full flex items-center h-[50px] text-gray-300 hover:bg-white/10 transition-colors px-4"
        >
          <LogOut size={20} />
          {!collapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;