import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 bg-white dark:bg-gray-950 transition-colors duration-300 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-12">
        About me!
      </h2>
      <div className="max-w-3xl text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed space-y-4 mt-12">
        <p>
          Hi, I'm Dean Chap — a Cloud Solutions Architect with a passion for
          building secure, scalable, and serverless applications on AWS. I
          specialize in turning complex business needs into cloud-native
          solutions using Terraform, Lambda, API Gateway, and other AWS
          services.
        </p>
        <p>
          With over 7 years of frontline leadership in client-facing
          environments and 4 years of hands-on development experience, I bring a
          rare blend of technical depth and business insight. I’ve worked on
          everything from Shopify-based e-commerce automation to data-driven
          applications, always with a focus on performance, reliability, and
          end-user experience.
        </p>
        <p>
          Beyond cloud architecture, I also have a passion for front-end
          development, crafting responsive and accessible websites using ReactJS
          and Tailwind CSS. I'm a firm believer in continuous learning,
          constantly exploring new technologies and refining my craft.
        </p>
        <p>
        Outside
          of tech, I enjoy staying updated on industry trends, playing chess,
          and kicking a soccer ball around with friends and family.
          If you're ready to bridge the gap between technical complexity and
          real business value, let's connect.
        </p>
      </div>
    </section>
  );
};

export default About;
