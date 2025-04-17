import React, { useEffect, useState } from 'react';
import Intro from './Intro';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Showcase from './Showcase';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import clsx from 'clsx';

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currSection, setCurrSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sectionIds = ['about', 'experience', 'projects', 'contact'];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // adjust this value to tune when the section becomes active
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setCurrSection(id);
        }
      });
    }, options);

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  });

  return (
    <div className='h-screen'>
      <nav   className={`fixed top-0 w-full h-16 flex justify-between items-center px-4 md:px-8 z-50 transition-all duration-300 ease-in-out `}>
        <div className='text-white text-2xl font-bold'></div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-4 ${
    scrolled
      ? 'bg-white/10 shadow-md right-3 top-3 rounded-full w-fit h-16 justify-center items-center px-4 backdrop-blur-md'
      : 'bg-transparent'
  }`}>
          <a href="#about" className={clsx("rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700", {
            "bg-gray-900 text-white": currSection === 'about',
            "text-gray-300": currSection !== 'about'
          })}>About</a>
          <a href="#experience" className={clsx("rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700", {
            "bg-gray-900 text-white": currSection === 'experience',
            "text-gray-300": currSection !== 'experience'
          })}>Experience</a>
          <a href="#projects" className={clsx("rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700", {
            "bg-gray-900 text-white": currSection === 'projects',
            "text-gray-300": currSection !== 'projects'
          })}>Projects</a>
          <a href="#contact" className={clsx("rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700", {
            "bg-gray-900 text-white": currSection === 'contact',
            "text-gray-300": currSection !== 'contact'
          })}>Contact</a>
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
          <div className="absolute top-16 right-0 w-1/2 rounded-lg z-50 bg-gray-900 md:hidden">
            <a href="#about" onClick={toggleMenu} className="block px-4 py-2 text-white">About</a>
            <a href="#experience" onClick={toggleMenu} className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Experience</a>
            <a href="#projects" onClick={toggleMenu} className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
            <a href="#contact" onClick={toggleMenu} className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className='pt-16'>
        <section id="about"><Intro /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="showcase"><Showcase /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}
