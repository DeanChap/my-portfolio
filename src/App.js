import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/layout/Navbar'; 
import Home from './components/sections/Home'; 
import About from './components/sections/About'; 
import Projects from './components/sections/Projects'; 
import Contact from './components/sections/Contact'; 

export default function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="font-sans min-h-screen text-black dark:text-white bg-white dark:bg-black transition-colors duration-300">
        <Navbar isVisible={showNavbar} />
        <main>
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        <footer className="bg-black dark:bg-gray-900 text-white dark:text-gray-200 py-6 text-center transition-colors duration-300">
          <div className="container mx-auto px-4">
            <p>&copy; {new Date().getFullYear()} Dean. All rights reserved.</p>
            <p className="text-sm mt-2">Built with React and Tailwind CSS</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}