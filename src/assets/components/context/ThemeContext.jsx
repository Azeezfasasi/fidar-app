import React, { createContext, useState } from 'react';

// Create the ThemeContext
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [image, setImage] = useState(null); // Add image state here
  const [firstName, setFirstName] = useState(''); // Add firstName state here

  // Toggle the dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, setIsDarkMode, image, setImage, firstName, setFirstName}}>
      {children}
    </ThemeContext.Provider>
  );
};