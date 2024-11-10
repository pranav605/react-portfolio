import React from 'react'
export default function Intro() {
  return (
    <section id="about" aria-label='about' className='h-screen flex flex-row justify-start items-center'>
      <div className=' text-left text-white p-5 md:p-20 '>
        <h1 className='text-7xl text-white font-bold'>
        I'm Sai Pranav Nishtala, a Front-End Developer.
        </h1>
        <h1 className='text-7xl text-gray-500 font-bold'>Based in Canada.</h1>
        <p className='text-lg text-white mt-3 p-1'>
        I'm a passionate front-end developer who brings both creativity and precision to every project. If you’re looking for a developer who truly cares about the details, I’d love to collaborate.
        </p>
      </div>
      {/* <div className='w-1/3'>
      <img src={profile} className='h-96' alt="Hand" />

      </div> */}
    </section>
  )
}

