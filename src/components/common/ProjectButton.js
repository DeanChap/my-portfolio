import React from 'react';

const ProjectButton = ({ href, children, primary = false, outline = false }) => {
  const baseClasses = "font-medium py-2 px-5 rounded-lg text-base transition-all duration-300 transform hover:scale-105";
  const primaryClasses = "bg-black text-white hover:bg-gray-950 dark:bg-white dark:text-black dark:hover:bg-gray-200";
  const outlineClasses = "border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black";

  let classes = baseClasses;
  if (primary) {
    classes += ` ${primaryClasses}`;
  } else if (outline) {
    classes += ` ${outlineClasses}`;
  } else {
    classes += ` ${primaryClasses}`; // Default to primary if neither specified
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
};

export default ProjectButton;