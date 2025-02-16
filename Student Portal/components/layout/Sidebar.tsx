'use client';

import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  FileText, 
  PenTool, 
  Users, 
  Library 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'My Classes', href: '/classes', icon: GraduationCap },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Class Schedule', href: '/schedule', icon: Calendar },
  { name: 'Grade Book', href: '/grades', icon: FileText },
  { name: 'Exams', href: '/exams', icon: PenTool },
  { name: 'Community', href: '/community', icon: Users },
  { name: 'Library', href: '/library', icon: Library },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="ml-2 text-xl font-semibold">EduLearn</span>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                          isActive
                            ? "bg-gray-50 text-primary"
                            : "text-gray-700 hover:text-primary hover:bg-gray-50"
                        )}
                      >
                        <item.icon className="h-6 w-6 shrink-0" />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}