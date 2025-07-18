import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeContext'; // Corrected path
import NavLink from './NavLink'; // Corrected path

const Navbar = ({ isVisible }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 shadow-md dark:shadow-lg transition-all duration-300
                     ${isVisible ? 'translate-y-0 opacity-100 bg-gray-100 dark:bg-black' : '-translate-y-full opacity-0 bg-white dark:bg-black'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-black text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 rounded-md p-2 transition-colors duration-300">
          DC
        </a>

        <div className="hidden md:flex space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors duration-300
                     bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;