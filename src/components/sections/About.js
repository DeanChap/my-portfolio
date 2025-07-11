import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 bg-white dark:bg-gray-950 transition-colors duration-300 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-12">
        Get to know me!
      </h2>
      <div className="max-w-3xl text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed space-y-4 mt-12">
        <p>
          Hi there! I'm Dean, a customer-obsessed Cloud Solutions Architect with
          over 7 years of leadership experience designing and delivering
          serverless, scalable, and secure AWS-native applications. I excel at
          translating complex business objectives into powerful cloud
          architectures that drive measurable impact. My expertise includes
          Terraform-based IaC, serverless compute (Lambda), API design, and
          CI/CD automation, with a strategic focus on data, DevOps, and digital
          commerce.
        </p>
        <p>
          My unique strength lies in blending deep cloud engineering skills with
          genuine customer insight, ensuring the solutions I build not only
          solve technical challenges but also deliver significant business value
          from end to end.
        </p>
        <p>
          Beyond cloud architecture, I also have a passion for front-end
          development, crafting responsive and accessible websites using ReactJS
          and Tailwind CSS. I'm a firm believer in continuous learning,
          constantly exploring new technologies and refining my craft. Outside
          of tech, I enjoy staying updated on industry trends, playing chess,
          and kicking a soccer ball around with friends and family.
        </p>
      </div>
    </section>
  );
};

export default About;
