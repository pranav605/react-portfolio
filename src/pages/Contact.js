import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="p-10 md:p-20 text-left dark:text-white" style={{ backgroundColor: 'transparent' }}>
      {/* <h1 className="text-3xl font-extrabold mb-6 text-gray-800 dark:text-white">Contact Me</h1> */}
      
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Feel free to reach out to me through any of the following platforms:
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-10">
          <a
            href="https://linkedin.com/in/sai-pranav-nishtala"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          
          <a
            href="https://github.com/pranav605"
            className="text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>

        {/* Contact Information */}
        <div className="mt-10 text-gray-800 dark:text-gray-300">
          <p className="text-lg">Email: <a href="mailto:saipranavnishtala@gmail.com" className="underline hover:text-blue-500">saipranavnishtala@gmail.com</a></p>
          <p className="text-lg">Mobile: <span>+1 (226) 961 9335</span></p>
        </div>
      </div>
    </section>
  );
}
