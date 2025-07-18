import React from "react";

const Skills = () => {
  const skills = {
    "Programming Languages": [
      "Python",
      "JavaScript (ES6+)",
      "Python",
      "TypeScript",
      "SQL",
      "Terraform",
    ],
    Frameworks: ["ReactJS", "Node", "Express"],
    Databases: ["MySQL", "MongoDB"],
    "Cloud Platforms": ["AWS", "Azure"],
    "Tools & Others": [
      "Git",
      "Docker",
      "RESTful APIs",
      "Shopify API",
      "Tailwind CSS",
      "CI/CD Pipeline",
      "Tableau",
      "Linux",
    ],
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 bg-white dark:bg-gray-950 transition-colors duration-300 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-12">
        Skills
      </h2>

      <div className="space-y-8 mt-12">
        {Object.entries(skills).map(([category, items], index) => (
          <div
            key={category}
            className="bg-gray-50 dark:bg-gray-200 p-6 rounded-lg shadow-md transition-all duration-500 ease-out transform translate-y-4 opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-black mb-4 border-b pb-2 border-gray-200 dark:border-gray-600">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-gray-800 dark:text-blue-100 rounded-full text-sm font-medium shadow-sm
                             hover:bg-blue-200 dark:hover:bg-gray-300 dark:hover:text-black transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Tailwind CSS animation keyframes for fade-in */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;
