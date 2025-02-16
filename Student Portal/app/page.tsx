'use client';

import { BookOpen, GraduationCap, CheckSquare } from "lucide-react";
import { StatCard } from "@/components/features/StatCard";
import { CourseCard } from "@/components/features/CourseCard";

const stats = [
  { title: "My Courses", value: 4, icon: <BookOpen className="h-5 w-5 text-primary" /> },
  { title: "My Classes", value: 4, icon: <GraduationCap className="h-5 w-5 text-primary" /> },
  { title: "My Tasks", value: 0, icon: <CheckSquare className="h-5 w-5 text-primary" /> },
];

const courses = [
  {
    title: "Introduction to Computer Science",
    instructor: "Dr. Sarah Johnson",
    progress: 75,
    image: "https://picsum.photos/800/600?random=1",
  },
  {
    title: "Advanced Mathematics",
    instructor: "Prof. Michael Chen",
    progress: 45,
    image: "https://picsum.photos/800/600?random=2",
  },
  {
    title: "Digital Marketing Fundamentals",
    instructor: "Emily Rodriguez",
    progress: 90,
    image: "https://picsum.photos/800/600?random=3",
  },
  {
    title: "Web Development Bootcamp",
    instructor: "James Wilson",
    progress: 30,
    image: "https://picsum.photos/800/600?random=4",
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 rounded-full overflow-hidden">
          <img
            src="https://picsum.photos/200"
            alt="User avatar"
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Welcome back, John!</h1>
          <p className="text-muted-foreground">Ready to continue learning?</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">My Courses</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              instructor={course.instructor}
              progress={course.progress}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}