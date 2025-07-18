import React from "react";

const ActionButton = ({
  href,
  children,
  outline = false,
  download = false,
}) => {
  const isExternalLink = href.startsWith('http://') || href.startsWith('https://');

  const baseClasses =
    "font-medium text-lg px-4 py-2 md:py-3 md:px-6 md:text-lg rounded-full whitespace-nowrap transition-all duration-300 transform hover:scale-105";
  const primaryClasses =
    "bg-black text-white hover:bg-gray-300 hover:text-black dark:bg-white dark:text-black dark:hover:bg-gray-200";
  const outlineClasses =
    "border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black";

  return (
    <a
      href={href}
      className={`${baseClasses} ${outline ? outlineClasses : primaryClasses}`}
      download={download ? true : undefined}
      target={isExternalLink ? "_blank" : "_self"}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

export default ActionButton;
