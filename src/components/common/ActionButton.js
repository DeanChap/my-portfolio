import React from 'react';

const ActionButton = ({ href, children, outline = false, download = false }) => {
  const baseClasses = "font-medium py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105";
  const primaryClasses = "bg-black text-white hover:bg-gray-300 hover:text-black dark:bg-white dark:text-black dark:hover:bg-gray-200";
  const outlineClasses = "border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black";

  return (
    <a href={href} 
      className={`${baseClasses} ${outline ? outlineClasses : primaryClasses}`}
      download={download ? true : undefined}
      >
      {children}
    </a>
  );
};

export default ActionButton;