'use client';

import { useState } from 'react';
import SidebarAgency from '../auth/components/sidebarAgency';

export default function AgencyLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [language, setLanguage] = useState('fr');

  const toggleTheme = () => {
    const newTheme = !isDarkTheme ? 'dark' : 'light';
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', newTheme);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`flex flex-col md:flex-row font-sans ${
        isDarkTheme ? 'dark' : 'light text-black'
      }`}
      style={{
        fontFamily: !isDarkTheme
          ? '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
          : undefined,
      }}
    >


      {/* En-tête mobile */}
      <div className="deep-ui-sidebar py-4 px-4 flex items-center justify-between md:hidden">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-deep-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <h1 className="text-lg font-semibold">MonAgence</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={toggleTheme} className="theme-switch" aria-label="Changer de thème"></button>
          <button onClick={toggleSidebar} className="deep-ui-button p-2 rounded-lg">
            <i data-feather="menu" className="h-5 w-5"></i>
          </button>
        </div>
      </div>

      {/* Barre latérale */}
      <SidebarAgency
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        toggleTheme={toggleTheme}
        language={language}
      />

      {/* Overlay mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 backdrop-blur-sm z-20 ${
          isSidebarOpen ? 'block' : 'hidden'
        } md:hidden overlay-blur`}
        onClick={toggleSidebar}
      ></div>

      {/* Contenu principal */}
      <div className="flex-1 p-4 md:p-10 pt-0 md:pt-10">{children}</div>
    </div>
  );
}
