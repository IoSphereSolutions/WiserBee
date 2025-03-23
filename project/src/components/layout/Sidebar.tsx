import React from 'react';
import {
  BookOpen,
  Calendar,
  ClipboardList,
  FileText,
  GraduationCap,
  Layout,
  Users,
  MessageSquare,
  Menu,
} from 'lucide-react';

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: GraduationCap, label: 'Grades', href: '/grades' },
  { icon: Calendar, label: 'Class Schedule', href: '/schedule' },
  { icon: ClipboardList, label: 'Exams Management', href: '/exams' },
  { icon: FileText, label: 'Lesson Plan', href: '/lessons' },
  { icon: BookOpen, label: 'Curriculum Design', href: '/curriculum' },
  { icon: Users, label: 'Class Management', href: '/classes' },
  { icon: Layout, label: 'Generate Paper', href: '/papers' },
  { icon: MessageSquare, label: 'Community', href: '/community' },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <aside className={`bg-[#2A1B6D] text-white transition-all duration-300 ${collapsed ? 'w-20' : 'w-72'} min-h-screen fixed left-0 top-0`}>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {!collapsed && <span className="text-xl font-bold">EduLMS</span>}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>
      
      <nav className="mt-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center space-x-3 px-4 py-3 hover:bg-white/10 transition-colors"
          >
            <item.icon size={24} />
            {!collapsed && <span>{item.label}</span>}
          </a>
        ))}
      </nav>
    </aside>
  );
}