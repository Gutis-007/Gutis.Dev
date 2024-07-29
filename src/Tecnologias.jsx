import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiGit, SiFigma } from 'react-icons/si';

export const Tecnologias = () => {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <h1 className="text-2xl font-bold mb-1 mt-8 text-white lg:text-4xl">Tecnologias</h1>
        <img className='mb-8' src="./public/Retangulo1.svg" alt="" />
      </div>
      <div className="flex flex-wrap justify-center lg:mx-32 xl:mx-64 xl:gap-4">
        <div className="flex flex-col text-center m-2 p-4 bg-violet-950 shadow-md rounded-lg text-white">
          <FaHtml5 className="w-24 h-20" />
          <h2 className="text-md font-bold">HTML</h2>
        </div>

        <div className="flex flex-col text-center m-2 p-4 bg-violet-950 shadow-md rounded-lg text-white">
          <FaCss3Alt className="w-24 h-20" />
          <h2 className="text-md font-bold">CSS</h2>
        </div>

        <div className="flex flex-col text-center m-2 p-4 bg-violet-950 shadow-md rounded-lg text-white">
          <FaJs className="w-24 h-20" />
          <h2 className="text-md font-bold">JavaScript</h2>
        </div>

        <div className="flex flex-col text-center m-2 p-4 bg-violet-950 shadow-md rounded-lg text-white">
          <FaReact className="w-24 h-20" />
          <h2 className="text-md font-bold">React</h2>
        </div>

        <div className="flex flex-col text-center m-2 p-4 bg-violet-950 shadow-md rounded-lg text-white">
          <FaJava className="w-24 h-20" />
          <h2 className="text-md font-bold">Java</h2>
        </div>

        <div className="flex flex-col text-center m-2 p-4 bg-violet-950 shadow-md rounded-lg text-white">
          <FaPython className="w-24 h-20" />
          <h2 className="text-md font-bold">Python</h2>
        </div>

        <div className="flex flex-col text-center m-2 p-4 bg-violet-950 shadow-md rounded-lg text-white">
          <SiDjango className="w-24 h-20" />
          <h2 className="text-md font-bold">Django</h2>
        </div>

        <div className="flex flex-col text-center m-2 p-4 bg-violet-950 shadow-md rounded-lg text-white">
          <SiTailwindcss className="w-24 h-20" />
          <h2 className="text-md font-bold">Tailwind CSS</h2>
        </div>

        <div className="flex flex-col text-center m-2 p-4 bg-violet-950 shadow-md rounded-lg text-white">
          <SiGit className="w-24 h-20" />
          <h2 className="text-md font-bold">Git</h2>
        </div>

        <div className="flex flex-col text-center m-2 p-4 bg-violet-950 shadow-md rounded-lg text-white">
          <SiFigma className="w-24 h-20" />
          <h2 className="text-md font-bold">Figma</h2>
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
