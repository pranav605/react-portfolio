import React from 'react'
import { ReactTyped } from 'react-typed'
export default function Intro() {
  return (
    <section id="about" aria-label='about' className='flex flex-row justify-center items-center'>
        <div className='w-2/3 text-left text-white'>
            <h1 className='text-5xl text-white font-bold'>
              <ReactTyped strings={["Hi!<br />I am Sai Pranav Nishtala"]} typeSpeed={100}/>
            </h1>
            {/* <img src={process.env.PUBLIC_URL+'/hand.png'} className='h-96' alt="Hand" /> */}
        </div>
    </section>
  )
}

