import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div name="skills" className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Technos</p>
                <p className='py-4'>Voici quelques technologies avec lesquelles j'ai travaillé</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={HTML} alt="HTML icon" className='w-20 mx-auto' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={CSS} alt="CSS icon" className='w-20 mx-auto' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={JavaScript} alt="Javascript icon" className='w-20 mx-auto' />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={ReactImg} alt="React icon" className='w-20 mx-auto' />
                    <p className='my-4'>ReactJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={GitHub} alt="HTML icon" className='w-20 mx-auto' />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Tailwind} alt="HTML icon" className='w-20 mx-auto' />
                    <p className='my-4'>Tailwind</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills