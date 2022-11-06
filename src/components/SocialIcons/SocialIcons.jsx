import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import SocialIcon from "./SocialIcon";

function SocialIcons() {
  return (
    <div
      className="relative flex flex-row bg-[#0a192f]
    md:flex md:fixed md:flex-col md:top-[35%] md:left-0 bg-transparent"
    >
      <ul className="flex w-full justify-evenly md:block">
        <SocialIcon
          background="bg-[#565F69]"
          linkUrl="CV_pierre_masquilier.pdf"
        >
          CV
          <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
        </SocialIcon>
        <SocialIcon
          background="bg-[#6FC2B0]"
          linkUrl="mailto:pierremasquilier.pro@gmail.com"
        >
          Email
          <HiOutlineMail size={30}></HiOutlineMail>
        </SocialIcon>
        <SocialIcon
          background="bg-blue-600"
          linkUrl="https://www.linkedin.com/in/%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB-pierre-masquilier-50216b149"
        >
          Linkedin
          <FaLinkedin size={30}></FaLinkedin>
        </SocialIcon>
        <SocialIcon
          background="bg-[#333333]"
          linkUrl="https://github.com/Pmasquilier"
        >
          Github
          <FaGithub size={30}></FaGithub>
        </SocialIcon>
      </ul>
    </div>
  );
}

export default SocialIcons;
