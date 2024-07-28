import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 p-4 font-jetBrains z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center flex-grow">
          <div className="text-white text-4xl font-bold">Gutis.Dev</div>
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleDropdown} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:space-x-4 lg:justify-end ${isOpen ? 'block' : 'hidden'} lg:block flex-grow`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-4 text-white">
            <li className="my-2 lg:my-0"><a href="#home" className="block lg:text-2xl px-2 py-1 hover:bg-slate-800 rounded">Home</a></li>
            <li className="my-2 lg:my-0"><a href="#about" className="block lg:text-2xl px-2 py-1 hover:bg-slate-800 rounded">Sobre</a></li>
            <li className="my-2 lg:my-0"><a href="#services" className="block lg:text-2xl px-2 py-1 hover:bg-slate-800 rounded">Serviços</a></li>
            <li className="my-2 lg:my-0"><a href="#contact" className="block lg:text-2xl px-2 py-1 hover:bg-slate-800 rounded">Contato</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
