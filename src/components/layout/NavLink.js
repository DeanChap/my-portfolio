import React from 'react';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-black dark:text-white text-lg font-medium hover:text-gray-700 dark:hover:text-black
           hover:bg-gray-200 dark:hover:bg-gray-100 px-3 py-2 rounded-full
           focus:outline-none focus:underline focus:underline-offset-4
           transition-all duration-300"
  >
    {children}
  </a>
);

export default NavLink;