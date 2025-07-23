import React from "react";
import ActionButton from "../common/ActionButton";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 bg-gray-100 dark:bg-black transition-colors duration-300 text-center"
    >
      <h1 className="text-6xl md:text-9xl font-extrabold text-black dark:text-white mb-6 animate-fade-in">
        Dean <span className="text-gray-700 dark:text-gray-300">Chap</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl animate-fade-in delay-200">
        Software Developer | Cloud Soutions Architect
      </p>
      <div className="flex space-x-6 animate-fade-in delay-400">
        <ActionButton href="#contact">My Info</ActionButton>
        <ActionButton href="/Resume-Dean_Chap.pdf" outline download>
          My Resume
        </ActionButton>
      </div>
    </section>
  );
};

export default Home;
