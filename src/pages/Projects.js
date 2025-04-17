import React, { useState } from 'react';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="sm:p-0 p-10 fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-800 hover:shadow-lg transition-all p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <button
          onClick={onClose}
          className="float-end top-4 right-4 text-xl text-gray-600 hover:text-gray-800"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
        <p className="text-white mb-6">{project.description}</p>
        <div className="flex gap-4">
          {project.technologies.map((tech, index) => (
            <img key={index} src={tech.logo} alt={tech.name} className="h-10 w-auto" />
          ))}
        </div>
        {project.url && 
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="float-end bottom-4 right-4 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go to website
          </a>
        }
      </div>
    </div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: 'Journal',
      description: 'Developed an online journaling website using NextJS',
      technologies: [
        { name: 'Typescript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
        { name: 'NextJS', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
      ],
      url:'https://journal-eight-theta.vercel.app/'
    },
    {
      name: 'Data Generation Tool',
      description: 'Developed an internal tool to enhance data quality and volume for ML training, achieving 92% accuracy in weapon detection from CCTV feeds.',
      technologies: [
        { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
        { name: 'PyTorch', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg' },
      ]
    },
    {
      name: 'DataScraper',
      description: 'Built a Python tool for web scraping, generating high-quality image datasets with a capacity of processing up to 10,000 images per hour.',
      technologies: [
        { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
        { name: 'TailwindCSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
        { name: 'Selenium', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png'}
      ]
    },
    {
      name: 'GreenCart',
      description: 'Developed a responsive e-commerce platform for plant purchases using Django and Tailwind CSS, with scalable architecture.',
      technologies: [
        { name: 'Django', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg' },
        { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
      ]
    },
    {
      name: 'AI Support Bot',
      description: 'Led a team to create an AI-driven customer support bot using the OpenAI API, following SCRUM methodology for efficiency.',
      technologies: [
        { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
        { name: 'Django', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg' },
        { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
      ]
    },
    {
      name: "Santa's AI Sleigh Ride",
      description: 'Built a Python app to demonstrate AI algorithms and analyze early machine learning methods, with a focus on efficiency.',
      technologies: [
        { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
      ]
    },
    {
      name: 'AI-Based Crop Predictions',
      description: 'Created a web app to suggest crop recommendations using big data and machine learning, based on weather predictions.',
      technologies: [
        { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
        { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
        { name: 'Hadoop', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Hadoop_logo.svg' },
      ]
    },
    {
      name: 'Socket Server Manager',
      description: 'Developed a Linux-based client-server app in C with load balancing and socket programming on a Debian-based system.',
      technologies: [
        { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
        { name: 'Linux', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1280px-Tux.svg.png' },
      ]
    },
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project); // Set the selected project to show the modal
  };

  const handleCloseModal = () => {
    setSelectedProject(null); // Close the modal
  };

  return (
    <section id='projects' aria-label='projects' className='p-5 md:p-20 text-left text-white'>
      <h1 className='text-3xl font-extrabold mb-6'>Projects</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/30 p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-100 sm:hover:scale-105"
            onClick={() => handleCardClick(project)}
          >
            <h3 className="text-xl font-semibold mb-2 text-white">{project.name}</h3>
            <p className="text-gray-300 mb-4">
              {project.description.substring(0, 100)}... {/* Short description */}
            </p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
}
