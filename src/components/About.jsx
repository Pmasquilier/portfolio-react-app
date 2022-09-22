import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        À propos
                    </p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 px-4'>
                    <p className='text-4xl font-bold sm:text-right'>
                        Salut, moi c'est Pierre. Et si tu jetais un coup d'oeil à mon travail ?
                    </p>
                </div>
                <div className='sm:text-right pb-8 pl-4'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laudantium, explicabo fuga sunt cupiditate adipisci! Magnam, impedit dolores harum quia sequi dolorem distinctio molestias ab. Reprehenderit ullam facilis eos tenetur?
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About