"use client";

import React, { useState } from 'react';
import { FaSearch, FaUser, FaCalendarAlt, FaStar, FaSignOutAlt, FaBell, FaBars, FaTimes } from 'react-icons/fa';

const SidebarTourist = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('FR');

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className={`sidebar ${isDarkMode ? 'dark' : 'light'} ${isCollapsed ? 'collapsed' : ''}`}>
       
      <div className="header">
        
        <button className="hamburger" onClick={toggleCollapsed}>
          {isCollapsed ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
         <div className="logo">
          {isCollapsed ? (
            <span>CT</span>
          ) : (
            <>
              <span>CT</span> <span>Circuit Touristique</span>
            </>
          )}
        </div>
        
        <div className="language-dropdown">
          <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
            <option value="FR">FR</option>
            <option value="EN">EN</option>
          </select>
        </div>

        
      </div>
      <ul className="menu">
        <li onClick={() => !isCollapsed && window.scrollTo(0, 0)}>
          <FaSearch size={24} /> {isCollapsed ? '' : 'Search...'}
        </li>
        <li className="active" onClick={() => !isCollapsed && window.scrollTo(0, 0)}>
          <FaUser size={24} /> {isCollapsed ? '' : 'Dashboard'}
        </li>
        <li onClick={() => !isCollapsed && window.scrollTo(0, 0)}>
          <FaCalendarAlt size={24} /> {isCollapsed ? '' : 'Reservations'}
        </li>
        <li onClick={() => !isCollapsed && window.scrollTo(0, 0)}>
          <FaStar size={24} /> {isCollapsed ? '' : 'Reviews'}
        </li>
        <li onClick={() => !isCollapsed && window.scrollTo(0, 0)}>
          <FaBell size={24} /> {isCollapsed ? '' : 'Notifications'}
        </li>
        <li onClick={() => !isCollapsed && window.scrollTo(0, 0)}>
          <FaSignOutAlt size={24} /> {isCollapsed ? '' : 'Logout'}
        </li>
      </ul>
      <div className="mode-toggle">
        {isCollapsed ? '' : <span>Dark Mode</span>}
        <label className="switch">
          <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
          <span className="slider"></span>
        </label>
      </div>
      <style jsx>{`
        .sidebar {
          width: 250px;
          height: 100vh;
          background: ${isDarkMode ? '#1a1a1a' : '#fff'};
          color: ${isDarkMode ? '#fff' : '#333'};
          padding: 20px 0;
          position: fixed;
          transition: all 0.3s;
        }
        .sidebar.collapsed {
          width: 60px;
        }
        .header {
          display: flex;
          align-items: center;
          padding: 10px 20px;
        }
        .hamburger {
          margin-right: 10px;
          background: none;
          border: none;
          color: ${isDarkMode ? '#fff' : '#333'};
          cursor: pointer;
        }
        .logo {
          flex-grow: 1;
          font-size: 18px;
          font-weight: bold;
        }
        .logo span:first-child {
          color: ${isDarkMode ? '#4a90e2' : '#6b48ff'};
        }
        .language-dropdown {
          margin-left: auto;
        }
        .language-dropdown select {
          padding: 5px;
          border-radius: 4px;
          background: ${isDarkMode ? '#333' : '#fff'};
          color: ${isDarkMode ? '#fff' : '#333'};
          border: 1px solid ${isDarkMode ? '#555' : '#ccc'};
        }
        .menu {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }
        .menu li {
          padding: 15px 20px;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: background 0.3s;
        }
        .menu li:hover, .menu li.active {
          background: ${isDarkMode ? '#333' : '#f0f0f0'};
          color: ${isDarkMode ? '#4a90e2' : '#6b48ff'};
        }
        .menu li svg {
          margin-right: ${isCollapsed ? '0' : '10px'};
        }
        .mode-toggle {
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 24px;
        }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: .4s;
          border-radius: 24px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: #6b48ff;
        }
        input:checked + .slider:before {
          transform: translateX(26px);
        }
      `}</style>
    </div>
  );
};

export default SidebarTourist 