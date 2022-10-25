import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              À propos
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 px-4">
            <p className="text-4xl font-bold sm:text-right">
              Et si on travaillait ensemble ?
            </p>
          </div>
          <div className="sm:text-right pb-8 pl-4">
            <p className="pb-2">
              Après quatres années d'expériences dans une grande entreprise
              d'édition logiciel, je propose maintenant mes services de
              développement de site internet en freelancing.
            </p>
            <p>
              Je vous accompagne dans la réalisation de votre site web ou pour
              la maintenance évolutive de votre produit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
