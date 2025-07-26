import React from 'react';
import { Bell, ChevronLeft, Globe, Menu, User } from 'lucide-react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './components/dashboard/Dashboard';
import ExamPage from './components/exam/ExamPage';
import FeesPage from './components/fees/FeesPage';
import PerformancePage from './components/performance/PerformancePage';
import SurveyForm from './components/survey/SurveyForm';
import WeeklyCalendar from './components/calendar/WeeklyCalendar';
import AccountSettings from './components/settings/AccountSettings';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'exam':
        return <ExamPage />;
      case 'fees':
        return <FeesPage />;
      case 'performance':
        return <PerformancePage />;
      case 'survey':
        return <SurveyForm />;
      case 'calendar':
        return <WeeklyCalendar />;
      case 'settings':
        return <AccountSettings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        collapsed={sidebarCollapsed}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'ml-[60px]' : 'ml-[250px]'}`}>
        <Header 
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          collapsed={sidebarCollapsed}
        />
        <main className="flex-1 p-6 overflow-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;