import React, { useState } from "react";
//import Logo from '../assets/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";

import { Link } from "react-scroll";
import SocialIcons from "./SocialIcons/SocialIcons";

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
      <div className="hidden md:flex">
        <SocialIcons></SocialIcons>
      </div>
    </div>
  );
};

export default Navbar;
