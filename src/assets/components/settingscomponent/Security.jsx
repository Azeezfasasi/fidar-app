import React from "react";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Security() {
    const { isDarkMode } = useContext(ThemeContext); // Access theme

    return (
        <>
          <div className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>Update your password</div>
          <div className={`mt-4 text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              You can update your password below. If you forgot your current password please contact support for assistance.
          </div>

          <form className={`mt-7 flex flex-col ${isDarkMode ? 'text-white' : 'text-black'}`}>
              <input
                  type="text"
                  className="mt-7 w-80 p-3 pl-4 pr-16 border border-gray-300 rounded-full text-sm font-semibold text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Current password"
                  required
              />
              <input
                  type="text"
                  className="mt-7 w-80 p-3 pl-4 pr-16 border border-gray-300 rounded-full text-sm font-semibold text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="New password"
                  required
              />
              <input
                  type="text"
                  className="mt-7 w-80 p-3 pl-4 pr-16 border border-gray-300 rounded-full text-sm font-semibold text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm password"
                  required
              />
              <button
                  type="submit"
                  className="mt-7 w-52 py-3 bg-gray-100 rounded-full text-lg font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                  Save changes
              </button>
          </form>
        </>
    );
}

export default Security;
