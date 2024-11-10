import React, { useState } from 'react';
import Intro from './Intro';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Heroicons for the hamburger menu icon

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='h-screen'>
      <nav className='fixed top-0 w-full bg-transparent h-16 flex justify-between items-center px-4 md:px-8 z-50'>
        <div className='text-white text-2xl font-bold'>
          {/* Uncomment if you want to add the name */}
          {/* <h1>Sai Pranav Nishtala</h1> */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#about" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">About</a>
          <a href="#experience" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Experience</a>
          <a href="#projects" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
          <a href="#contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <XIcon className="h-6 w-6 text-white" />
          ) : (
            <MenuIcon className="h-6 w-6 text-white" />
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className=" absolute top-16 right-0 w-1/2 rounded-lg z-50 bg-gray-900 md:hidden">
            <a href="#about" onClick={toggleMenu} className="block px-4 py-2 text-white">About</a>
            <a href="#experience" onClick={toggleMenu} className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Experience</a>
            <a href="#projects" onClick={toggleMenu} className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
            <a href="#contact" onClick={toggleMenu} className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
          </div>
        )}
      </nav>

      {/* Content with padding to prevent overlap with navbar */}
      <div className='pt-16'>
        <Intro />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
