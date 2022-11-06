import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import SocialIconDesktop from "./SocialIconDesktop";

function SocialIconsDesktop() {
  return (
    <div className="hidden md:flex md:fixed md:flex-col md:top-[35%] md:left-0">
      <ul>
        <SocialIconDesktop
          background="bg-[#565F69]"
          linkUrl="CV_pierre_masquilier.pdf"
        >
          CV
          <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
        </SocialIconDesktop>
        <SocialIconDesktop
          background="bg-[#6FC2B0]"
          linkUrl="mailto:pierremasquilier.pro@gmail.com"
        >
          Email
          <HiOutlineMail size={30}></HiOutlineMail>
        </SocialIconDesktop>
        <SocialIconDesktop
          background="bg-blue-600"
          linkUrl="https://www.linkedin.com/in/pierre-masquilier-50216b149"
        >
          Linkedin
          <FaLinkedin size={30}></FaLinkedin>
        </SocialIconDesktop>
        <SocialIconDesktop
          background="bg-[#333333]"
          linkUrl="https://github.com/Pmasquilier"
        >
          Github
          <FaGithub size={30}></FaGithub>
        </SocialIconDesktop>
      </ul>
    </div>
  );
}

export default SocialIconsDesktop;
