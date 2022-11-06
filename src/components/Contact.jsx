import React from "react";
import SocialIconMobiles from "./SocialIcons/SocialIconsMobile";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex flex-col justify-between items-center pt-20"
    >
      <div>
        <form
          method="POST"
          action="https://getform.io/f/bd2da93f-e5e5-4823-8a77-cccd2219c59c"
          className="flex flex-col max-w-[600px] h-full"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4 ">
              Vous pouvez remplir le formulaire ci-dessous :
            </p>
          </div>

          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            cols="30"
            rows="5"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Envoyer
          </button>
        </form>
      </div>
      <SocialIconMobiles></SocialIconMobiles>
    </div>
  );
};

export default Contact;
