import React from 'react';
import { WelcomeBanner } from '../components/dashboard/WelcomeBanner';
import { StatsCards } from '../components/dashboard/StatsCards';
import { CourseGrid } from '../components/dashboard/CourseGrid';

export function Dashboard() {
  return (
    <>
      <WelcomeBanner />
      <StatsCards />
      <CourseGrid />
    </>
  );
}