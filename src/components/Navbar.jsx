import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <img src={Logo} alt="Logo" style={{width: '50px'}} />

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>Accueil</li>
        <li>À propos</li>
        <li>Compétences</li>  
        <li>Projets</li>
        <li>Contact</li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes> }
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
        <li className='py-6 text-4xl'>Accueil</li>
        <li className='py-6 text-4xl'>À propos</li>
        <li className='py-6 text-4xl'>Compétences</li>  
        <li className='py-6 text-4xl'>Projets</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* social icons */}
      <div className='hidden'></div>

    </div>
  )
}

export default Navbar