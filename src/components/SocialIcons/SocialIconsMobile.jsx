import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import SocialIcon from "./SocialIcon";

function SocialIconsMobile() {
  return (
    <div className="relative flex flex-row bg-[#0a192f] mb md:hidden ">
      <ul className="flex w-full justify-evenly">
        <SocialIcon
          background="bg-[#565F69]"
          linkUrl="CV_pierre_masquilier.pdf"
        >
          CV
          <BsFillPersonLinesFill
            className="m-auto"
            size={30}
          ></BsFillPersonLinesFill>
        </SocialIcon>
        <SocialIcon
          background="bg-[#6FC2B0]"
          linkUrl="mailto:pierremasquilier.pro@gmail.com"
        >
          Email
          <HiOutlineMail className="m-auto" size={30}></HiOutlineMail>
        </SocialIcon>
        <SocialIcon
          background="bg-blue-600"
          linkUrl="https://www.linkedin.com/in/pierre-masquilier-50216b149"
        >
          Linkedin
          <FaLinkedin className="m-auto" size={30}></FaLinkedin>
        </SocialIcon>
        <SocialIcon
          background="bg-[#333333]"
          linkUrl="https://github.com/Pmasquilier"
        >
          Github
          <FaGithub className="m-auto" size={30}></FaGithub>
        </SocialIcon>
      </ul>
    </div>
  );
}

export default SocialIconsMobile;
