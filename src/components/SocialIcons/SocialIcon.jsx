import React from "react";
import { classNames } from "../../utils/classnames";

function SocialIcon(props) {
  return (
    <li
      className={classNames(
        "w-[100px] h-[100px] flex justify-between items-center duration-300 md:w-[160px] md:h-[60px] md:ml-[-100px] md:hover:ml-[-10px]",
        props.background
      )}
    >
      <a
        href={props.linkUrl}
        target="_blank"
        download
        className="md:flex justify-between items-center w-full text-gray-300 md:text-center"
        rel="noreferrer"
      >
        {props.children}
      </a>
    </li>
  );
}

export default SocialIcon;
