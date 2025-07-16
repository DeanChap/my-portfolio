import React from "react";
import ProjectButton from "../../common/ProjectButton";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-4 transition-all duration-300 overflow-hidden min-h-[30rem] flex flex-col">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-fill rounded-t-xl"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x250/CCCCCC/333333?text=Image+Not+Found";
        }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-base mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex justify-center space-x-4 mt-auto">
          <ProjectButton href={project.live} primary>
            View Live
          </ProjectButton>
          <ProjectButton href={project.gitcode} outline>
            Code
          </ProjectButton>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
