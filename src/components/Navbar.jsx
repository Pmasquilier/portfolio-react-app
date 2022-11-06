import React, { useState } from "react";
//import Logo from '../assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Link } from "react-scroll";
import SocialIcons from "./SocialIcons";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300">
      {/* <img src={Logo} alt="Logo" style={{width: '50px'}} /> */}

      {/* menu */}
      <ul className="hidden md:flex">
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
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Accueil
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            À propos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Compétences
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="portfolio"
            smooth={true}
            duration={500}
          >
            Projets
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <SocialIcons
            background="bg-blue-600"
            linkUrl="https://www.linkedin.com/in/pierre-masquilier-50216b149"
          >
            Linkedin
            <FaLinkedin size={30}></FaLinkedin>
          </SocialIcons>
          <SocialIcons
            background="bg-[#333333]"
            linkUrl="https://github.com/Pmasquilier"
          >
            Github
            <FaGithub size={30}></FaGithub>
          </SocialIcons>
          <SocialIcons
            background="bg-[#6FC2B0]"
            linkUrl="mailto:pierremasquilier.pro@gmail.com"
          >
            Email
            <HiOutlineMail size={30}></HiOutlineMail>
          </SocialIcons>
          <SocialIcons
            background="bg-[#565F69]"
            linkUrl="CV_pierre_masquilier.pdf"
          >
            CV
            <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
          </SocialIcons>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
