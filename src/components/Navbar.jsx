import React, { useState } from "react";
import { useTranslation } from "react-i18next";
//import Logo from '../assets/logo.png'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import SocialIcons from "./SocialIcons/SocialIcons";

import Select from "react-select";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.value);
  };

  const options = [
    { value: "fr", label: "Français" },
    { value: "en", label: "English" },
  ];

  const customStyles = {
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "white",
      "&:hover": {
        color: "white",
      },
    }),
    option: (provided, { isSelected }) => ({
      ...provided,
      border: "1px solid white",
      margin: 0,
      backgroundColor: isSelected ? "#0a192f" : "white",
      color: isSelected ? "white" : "#0a192f",
    }),
    control: (provided, { isFocused }) => ({
      ...provided,
      color: "white",
      borderColor: "2px solid white",
      background: "#0a192f",
    }),
  };
  return (
    <div className="flex items-center justify-between flex-row fixed w-full h-[80px] px-4  bg-[#0a192f] text-gray-300">
      <div>
        <Select
          styles={customStyles}
          onChange={changeLanguage}
          defaultValue={options[1]}
          options={options}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: "white",
              //primary: "#0a192f",
            },
          })}
        />
      </div>
      <div className="flex justify-end items-center ">
        {/* <img src={Logo} alt="Logo" style={{width: '50px'}} /> */}

        {/* menu */}
        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              {t("navbar.part1")}
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              {t("navbar.part2")}
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              {t("navbar.part3")}
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500}>
              {t("navbar.part4")}
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              {t("navbar.part5")}
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
              {t("navbar.part1")}
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              {t("navbar.part2")}
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              {t("navbar.part3")}
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="portfolio"
              smooth={true}
              duration={500}
            >
              {t("navbar.part4")}
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              {t("navbar.part5")}
            </Link>
          </li>
        </ul>
        {/* social icons */}
        <div className="hidden md:flex">
          <SocialIcons></SocialIcons>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
