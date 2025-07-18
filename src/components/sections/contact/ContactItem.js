import React from 'react';

const ContactItem = ({ icon: IconComponent, title, link, linkText, iconColorClass, linkColorClass }) => {
  return (
    <a
      href={link}
      target={link.startsWith('http') ? "_blank" : "_self"}
      rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
      className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm
                 transition-all duration-300 cursor-pointer hover:-translate-y-2 transform ease-in-out no-underline"
    >

      {IconComponent && (
        <IconComponent className={`w-7 h-7 mr-4 flex-shrink-0 ${iconColorClass}`} />
      )}
      <div>
        <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <span className={`${linkColorClass} text-lg`}> {/* Use span for text, not a, to prevent nested anchors */}
          {linkText}
        </span>
      </div>
    </a>
  );
};

export default ContactItem;
