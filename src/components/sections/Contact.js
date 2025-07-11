import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import SocialLink from './contact/SocialLink'; 
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData); // In a real application, you would send this to a backend service.
    setStatusMessage("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' }); // Clear form
    setTimeout(() => setStatusMessage(''), 5000); // Clear message after 5 seconds
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-20 px-4 bg-white dark:bg-gray-950 transition-colors duration-300 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">Contact Me</h2>
      <div className="w-full max-w-md bg-white dark:bg-black p-8 rounded-xl shadow-lg dark:shadow-xl mt-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-left text-gray-800 dark:text-gray-200 text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-left text-gray-800 dark:text-gray-200 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-left text-gray-800 dark:text-gray-200 text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-950 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-200 dark:bg-white dark:text-black dark:hover:bg-gray-200 hover:text-black
                       transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transform hover:scale-105"
          >
            Send Message
          </button>
          {statusMessage && (
            <p className="mt-4 text-center text-green-600 dark:text-green-400">
              {statusMessage}
            </p>
          )}
        </form>
      </div>
      <div className="mt-12 flex space-x-6">
        <SocialLink href="https://github.com/DeanChap" icon={<Github size={28} />} label="GitHub" />
        <SocialLink href="https://www.linkedin.com/in/dean-chap-721537187/" icon={<Linkedin size={28} />} label="LinkedIn" />
        <SocialLink href="deanchaps@gmail.com" icon={<Mail size={28} />} label="Email" />
      </div>
    </section>
  );
};

export default Contact;