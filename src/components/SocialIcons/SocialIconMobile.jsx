import React from "react";
import { classNames } from "../../utils/classnames";

function SocialIconMobile(props) {
  return (
    <li
      className={classNames(
        "w-[100px] h-[100px] flex justify-between items-center duration-300",
        props.background
      )}
    >
      <a
        href={props.linkUrl}
        target="_blank"
        download
        className="md:flex justify-between items-center w-full text-gray-300 text-center"
        rel="noreferrer"
      >
        {props.children}
      </a>
    </li>
  );
}

export default SocialIconMobile;
