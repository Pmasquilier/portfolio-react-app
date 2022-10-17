import React, {useState} from 'react'
//import Logo from '../assets/logo.png'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


import {Link} from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300'>
      {/* <img src={Logo} alt="Logo" style={{width: '50px'}} /> */}

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            À propos
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
             Compétences
          </Link>  
        </li>  
        <li>
          <Link to="portfolio" smooth={true} duration={500}>
            Projets
          </Link>  
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>  
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes> }
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Accueil
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            À propos
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
             Compétences
          </Link>  
        </li>  
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="portfolio" smooth={true} duration={500}>
            Projets
          </Link>  
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>  
        </li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a href='https://www.linkedin.com/in/pierre-masquilier-50216b149' target="_blank" className='flex justify-between items-center w-full text-gray-300' rel="noreferrer">
                Linkedin <FaLinkedin size={30}></FaLinkedin>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a href='https://github.com/Pmasquilier' target="_blank" className='flex justify-between items-center w-full text-gray-300' rel="noreferrer">
                Github <FaGithub size={30}></FaGithub>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6FC2B0]'>
              <a href='mailto:pierremasquilier.pro@gmail.com' target="_blank" className='flex justify-between items-center w-full text-gray-300' rel="noreferrer">
                Email <HiOutlineMail size={30}></HiOutlineMail>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565F69]'>
              <a href='CV_pierre_masquilier.pdf' download className='flex justify-between items-center w-full text-gray-300'>
                CV <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
              </a>
            </li>
            
          </ul>
      </div>
    </div>
  )
}

export default Navbar