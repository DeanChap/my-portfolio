import React from "react";
import ContactItem from './contact/ContactItem';
import { Mail, Phone, Linkedin, Github} from 'lucide-react'; 

const Contacts = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      link: "mailto:deanchaps@gmail.com",
      linkText: "deanchaps@gmail.com",
      iconColorClass: "text-blue-600 dark:text-blue-400",
      linkColorClass: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Phone,
      title: "Phone",
      link: "tel:+1234567890",
      linkText: "+1 (234) 567-890",
      iconColorClass: "text-green-600 dark:text-green-400",
      linkColorClass: "text-green-600 dark:text-green-400",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/dean-chap-721537187/",
      iconColorClass: "text-blue-700 dark:text-blue-300",
      linkColorClass: "text-blue-700 dark:text-blue-300",
    },
    {
      icon: Github,
      title: "GitHub",
      link: "https://github.com/DeanChap",
      iconColorClass: "text-purple-600 dark:text-purple-400",
      linkColorClass: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 bg-gray-100 dark:bg-black transition-colors duration-300 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">
        Contact Me
      </h2>

      <div className="w-full max-w-lg bg-gray-100 dark:bg-black flex flex-col p-8 gap-4 rounded-xl shadow-lg dark:shadow-xl mt-12">
        <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
          Click on links!
        </h4>

        {contactMethods.map((method) => (
          <ContactItem
            key={method.title}
            icon={method.icon}
            title={method.title}
            link={method.link}
            linkText={method.linkText}
            iconColorClass={method.iconColorClass}
            linkColorClass={method.linkColorClass}
          />
        ))}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 text-center">
        Looking forward to connecting with you!
      </p>
    </section>
  );
};

export default Contacts;