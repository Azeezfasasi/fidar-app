import React, { useContext } from 'react';
import { ThemeContext } from '../../components/context/ThemeContext';

function ThemeSwitcher() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); // Access global theme

  return (
    <div className={`p-5 transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="flex items-center cursor-pointer mb-5" onClick={toggleTheme}>
        <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full relative mr-3">
          <div
            className={`w-5 h-5 rounded-full bg-white dark:bg-black absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`}
          ></div>
        </div>
        <span className="text-lg">{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-semibold">{isDarkMode ? "Dark Mode is ON" : "Light Mode is ON"}</h1>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
