import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

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
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a href='/' className='flex justify-between items-center w-full text-gray-300'>
                Linkedin <FaLinkedin size={30}></FaLinkedin>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a href='/' className='flex justify-between items-center w-full text-gray-300'>
                Github <FaGithub size={30}></FaGithub>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6FC2B0]'>
              <a href='/' className='flex justify-between items-center w-full text-gray-300'>
                Email <HiOutlineMail size={30}></HiOutlineMail>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565F69]'>
              <a href='/' className='flex justify-between items-center w-full text-gray-300'>
                CV <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
              </a>
            </li>
            
          </ul>
      </div>
    </div>
  )
}

export default Navbar