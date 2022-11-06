import React from "react";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SocialIcons(props) {
  return (
    <li
      className={classNames(
        "w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300",
        props.background
      )}
    >
      <a
        href={props.linkUrl}
        target="_blank"
        className="lg:flex justify-between items-center w-full text-gray-300"
        rel="noreferrer"
      >
        {props.children}
      </a>
    </li>
  );
}

export default SocialIcons;
