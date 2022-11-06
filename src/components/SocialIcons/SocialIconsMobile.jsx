import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import SocialIconMobile from "./SocialIconMobile";

function SocialIconMobilesMobile() {
  return (
    <div className="relative flex flex-row bg-[#0a192f] mb md:hidden ">
      <ul className="flex w-full justify-evenly">
        <SocialIconMobile
          background="bg-[#565F69]"
          linkUrl="CV_pierre_masquilier.pdf"
        >
          CV
          <BsFillPersonLinesFill
            className="m-auto"
            size={30}
          ></BsFillPersonLinesFill>
        </SocialIconMobile>
        <SocialIconMobile
          background="bg-[#6FC2B0]"
          linkUrl="mailto:pierremasquilier.pro@gmail.com"
        >
          Email
          <HiOutlineMail className="m-auto" size={30}></HiOutlineMail>
        </SocialIconMobile>
        <SocialIconMobile
          background="bg-blue-600"
          linkUrl="https://www.linkedin.com/in/pierre-masquilier-50216b149"
        >
          Linkedin
          <FaLinkedin className="m-auto" size={30}></FaLinkedin>
        </SocialIconMobile>
        <SocialIconMobile
          background="bg-[#333333]"
          linkUrl="https://github.com/Pmasquilier"
        >
          Github
          <FaGithub className="m-auto" size={30}></FaGithub>
        </SocialIconMobile>
      </ul>
    </div>
  );
}

export default SocialIconMobilesMobile;
