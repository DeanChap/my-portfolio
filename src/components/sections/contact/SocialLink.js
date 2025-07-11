import React from 'react';

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-black dark:text-white transform hover:scale-110 transition-colors duration-300 flex flex-col items-center group"
    aria-label={label}
  >
    <div className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 dark:group-hover:bg-gray-600 transition-colors duration-300">
      {icon}
    </div>
    <span className="mt-2 text-sm hidden sm:block">{label}</span>
  </a>
);

export default SocialLink;