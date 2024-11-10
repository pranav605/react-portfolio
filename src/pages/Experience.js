import React from 'react';

const experiences = [
  {
    date: 'September 2024 - Present',
    title: 'AI/CV Intern at Madun Corp.',
    description: 'Secured an internship at Matdun Corp as an AI/CV intern to gain hands-on experience and deepen my knowledge of cutting-edge AI technologies, with a focus on computer vision, to contribute to innovative projects in the AI field.',
  },
  {
    date: 'October 2022 - June 2023',
    title: 'Technology Analyst at Infosys Ltd.',
    description: 'Designed and maintained high-performance B2B e-commerce websites for large-scale projects, including prestigious clients like Siemens Energy and Bausch and Lomb, ensuring cross-platform responsiveness and seamless user experiences.',
  },
  {
    date: 'October 2021 - September 2022',
    title: 'Senior Systems Engineer at Infosys Ltd.',
    description: 'Diagnosed and resolved complex JavaScript issues, optimizing site performance and load times, while ensuring smooth functionality across various platforms and enhancing the overall user experience.',
  },
  {
    date: 'October 2020 - September 2021',
    title: 'Systems Engineer at Infosys Ltd.',
    description: 'Assisted in developing responsive websites using HTML, CSS, and JavaScript, optimizing performance and collaborating with senior developers to enhance user experience.',
  },
  {
    date: 'January 2020 - October 2020',
    title: 'Systems Engineer Trainee at Infosys Ltd.',
    description: 'Joined as an intern at Infosys Ltd and was trained on Full stack web development using MERN stack'
  }
];

export default function Experience() {
  return (
    <section id='experience' className='z-10 p-5 md:p-20 text-left text-white'>
      <h1 className='text-3xl font-extrabold mb-6'>Experience</h1>

      <ol className="relative border-l border-gray-500">
        {experiences.map((experience, index) => (
          <li key={index} className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-gray-500"></div>
            <time className="mb-1 text-sm font-medium text-gray-100 sm:text-gray-500">{experience.date}</time>
            <h3 className="text-lg font-semibold text-white">{experience.title}</h3>
            <p className="text-base font-normal text-gray-400">
              {experience.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
