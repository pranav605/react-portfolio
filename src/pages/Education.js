import React from 'react';

const schools = [
    {
        title: "University of Windsor",
        date: "September 2023 - December 2024",
        description: "Master of Applied Computing"
    },
    {
        title: "Anil Neerukonda Institute of Technology and Sciences",
        date: "June 2016 - September 2020",
        description: "Bachelor of Technology in Computer Science"
    }
];

export default function Education() {
  return (
    <section id='education' aria-label='education' className='z-10 p-5 md:p-20 text-left text-white'>
      <h1 className='text-3xl font-extrabold mb-6'>Education</h1>

      <ol className="relative border-l border-gray-500">
        {schools.map((school, index) => (
          <li key={index} className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-gray-500"></div>
            <time className="mb-1 text-sm font-medium text-gray-100 sm:text-gray-500">{school.date}</time>
            <h3 className="text-lg font-semibold text-white">{school.title}</h3>
            <p className="text-base font-normal text-gray-400">
              {school.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
