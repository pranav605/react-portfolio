import React from 'react';
import Intro from './Intro';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

export default function Index() {
  return (
    <div className='h-screen'>
      <nav className='fixed top-0 w-full bg-transparent h-16 flex justify-between'>
        <div className='justify-center items-center flex ml-4'>
          {/* <h1 className='text-white text-2xl font-bold align-middle'>Sai Pranav Nishtala</h1> */}
        </div>
        <div className="flex justify-center items-center mr-4 space-x-4">
          <a href="#about" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" >About</a>
          <a href="#experience" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Experience</a>
          <a href="#projects" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
          <a href="#contact" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
        </div>
      </nav>
      {/* Add padding to prevent content from being hidden behind the navbar */}
      <div className='pt-16'>
        <Intro />
        <Experience />
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}
