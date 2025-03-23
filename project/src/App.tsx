import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { Dashboard } from './pages/Dashboard';
import { Grades } from './pages/Grades';
import { ClassSchedule } from './pages/ClassSchedule';
import { CurriculumDesign } from './pages/CurriculumDesign';
import { ClassManagement } from './pages/ClassManagement';
import { PaperGeneration } from './pages/PaperGeneration';
import { Community } from './pages/Community';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <Header />
        
        <main className="ml-72 pt-[70px]">
          <div className="max-w-[1440px] mx-auto p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/grades" element={<Grades />} />
              <Route path="/schedule" element={<ClassSchedule />} />
              <Route path="/curriculum" element={<CurriculumDesign />} />
              <Route path="/classes" element={<ClassManagement />} />
              <Route path="/papers" element={<PaperGeneration />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App