import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

// raccourcis rafce react arrow fonction export component
const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        
        {/* shortcut comment ctrl + / */}
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Bonjour, je m'appelle</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Pierre Masquilier</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>Je suis un développeur front-end freelance.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Passionné par le développement web, j'accompagne les entreprises et les entrepreneurs à mettre 
        en place une solution personnalisée adaptée à leurs besoins.  
        </p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300'>
                <Link to="portfolio" smooth={true} duration={500}>
                Projets
              </Link>  
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'>
                    
                    </HiArrowNarrowRight>
                </span>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Home