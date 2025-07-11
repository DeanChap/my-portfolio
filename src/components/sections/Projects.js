import React from "react";
import ProjectCard from "./projects/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Severless Contact-form",
      description:
        "Developed a secure, scalable contact form with AWS Lambda, API Gateway, DynamoDB, S3. Terraform for IaC, GitHub Actions for CI/CD, plus API security and CloudWatch monitoring.",
      imageUrl: "/images/C_form.png",
      live: "https://github.com/DeanChap/AWS-severless-contact-form",
      gitcode: "https://github.com/DeanChap/AWS-severless-contact-form",
    },
    {
      title: "Tesla UI/UX",
      description:
        "Developed a responsive and interactive website clone using React.js and Tailwind CSS, focusing on modular and maintainable code.",
      imageUrl: "/images/tesla.png",
      live: "https://tesla-clone-by-deanchap.netlify.app/",
      gitcode: "https://github.com/DeanChap/tesla-clone",
    },
    {
      title: "Geritch UI/UX",
      description:
        "Designed and developed a responsive and scalable landing page using React.js and Tailwind CSS for local restaurant.",
      imageUrl: "/images/geritch.png",
      live: "https://restaurant-v2.netlify.app/",
      gitcode: "https://github.com/DeanChap/Restaurant-2.0",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 bg-gray-100 dark:bg-black transition-colors duration-300 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mt-12 cursor-pointer">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
