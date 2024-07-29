import { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './App.css';



const App = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center h-full lg:min-h-screen bg-slate-900 bg-estrelas">
      <div className="lg:flex-1 flex flex-col items-center lg:items-start lg:m-16 xl:ml-16 ">
        <h1 className="text-1xl font-regular mb-4 text-white lg:text-4xl">🖐🏻 Olá! Me chamo Gustavo</h1>
        <h1 className="text-2xl font-bold mb-4 text-white text-center lg:text-left lg:text-4xl xl:text-5xl">
          <ReactTypingEffect
            text={['Sou Desenvolvedor Full-Stack',"I'am Full-Stack Developer"]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={1000}
          />
        </h1>
        <h1 className="text-1xl font-regular text-white mt-4 lg:text-4xl">E este é meu portfólio</h1>
        <a
          className='bg-white shadow-md shadow-indigo-950 hover:shadow-sky-900 hover:text-sky-500 hover:shadow-md text-slate-950 font-bold py-4 px-12 rounded mt-4'
          href="/GustavoFerreira.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Baixar Curriculo
        </a>      
        </div>
        <img className=" w-64 mt-16 mb-8 lg:mt-8 lg:w-1/4  lg:mx-32" src="/ImagenCartoon.svg" alt="Cartoon Image" />
    </div>
    
  );
};

export default App;
