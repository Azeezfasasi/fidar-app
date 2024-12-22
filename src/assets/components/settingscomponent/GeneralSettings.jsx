

import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function GeneralSettings() {
    const { isDarkMode } = useContext(ThemeContext); // Access theme

    return (
        <div className={`bg-white dark:bg-gray-800 rounded-xl h-[418px] shadow-md overflow-y-scroll overflow-x-hidden flex flex-col items-start justify-start p-6 relative ${isDarkMode ? 'dark' : ''}`}>
            <div className="text-gray-800 dark:text-white font-semibold text-lg absolute left-[50px] top-[30px]">Language &amp; Region</div>
            <div className="text-gray-800 dark:text-gray-300 font-semibold text-sm absolute left-[50px] top-[67px]">
                Changes to your language and Time zone
            </div>
            <div className="flex flex-col gap-2 items-start justify-start ml-8 mt-24">
                <div className="text-gray-600 dark:text-gray-400 font-semibold text-sm">Language</div>
                <select className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 p-2 rounded-md w-72 outline-none">
                    <option>English</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Italian</option>
                </select>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start ml-8 mt-6">
                <div className="text-gray-600 dark:text-gray-400 font-semibold text-sm">Time Zone</div>
                <select className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 p-2 rounded-md w-72 outline-none">
                    <option>West Africa</option>
                    <option>America</option>
                    <option>Asia</option>
                    <option>Middle East</option>
                </select>
            </div>
            <div className="ml-8 mt-6">
                <ThemeSwitcher />
            </div>
        </div>
    );
}

export default GeneralSettings;
