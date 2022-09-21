import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

// raccourcis rafce react arrow fonction export component
const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        
        {/* shortcut comment ctrl + / */}
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Bonjour, je m'appelle</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Pierre Masquilier</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>Je suis un développeur front-end.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi iste autem consectetur quod quas non soluta nesciunt, fuga id asperiores facere earum? Accusamus aut dolores mollitia quibusdam distinctio illo. </p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300'>
                Voir mon travail 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'></HiArrowNarrowRight>
                </span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Home