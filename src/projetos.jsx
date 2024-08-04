import React from 'react';

export const Blog = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className='flex flex-col items-center'>
                <h1 className="text-2xl font-bold mb-1 mt-8 text-white lg:text-4xl">Projetos</h1>
                <img className=' mb-8' src="/Retangulo1.svg" alt="" />
            </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="./StudyAsync.png"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="Estudos"
                >
                  Estudos
                </a>
                <span className="text-gray-600"> — Abril 2024</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Study Async Card"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Study Async
              </a>
              <p className="mb-2 text-gray-700">
              Um projeto de um sistema de estudos onde se pode criar flashcards e desafios onde se é possivel visualizar um relatorio de seu desempenho apos o desafio ser finalizado assim para ajudar a identificar aonde se pode melhorar nos estudos.
              </p>
              <a
                href="https://studyasync.vercel.app/usuarios/logar/"
                aria-label=""
                className="inline-flex items-center p-1 rounded  bg-slate-300 font-semibold transition-colors duration-200 hover:bg-slate-400"
              >
                Deploy
              </a>
              <a
                href="https://github.com/Gutis-007/Study_Async"
                aria-label=""
                className="ml-2 inline-flex items-center p-1 rounded  bg-slate-300 font-semibold transition-colors duration-200 hover:bg-slate-400"
              >
                Repositorio
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="./Decodificador de Texto.png"
              className="object-cover w-full h-64 border-b-2 border-slate-500"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title=""
                >
                  Estudos
                </a>
                <span className="text-gray-600"> — Julho 2024</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Study Async Card"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Decoficador de Texto
              </a>
              <p className="mb-2 text-gray-700">
              Este é um projeto simples de codificador e decodificador de texto desenvolvido em JavaScript. O objetivo deste projeto é permitir que os usuários insiram um texto e escolham codificar ou decodificar esse texto usando uma interface web intuitiva.
              </p>
              <a
                href="https://gutis-007.github.io/Decodificador-de-texto/"
                aria-label=""
                className="inline-flex items-center p-1 rounded  bg-slate-300 font-semibold transition-colors duration-200 hover:bg-slate-400"
              >
                Deploy
              </a>
              <a
                href="https://github.com/Gutis-007/Decodificador-de-texto"
                aria-label=""
                className="ml-2 inline-flex items-center p-1 rounded  bg-slate-300 font-semibold transition-colors duration-200 hover:bg-slate-400"
              >
                Repositorio
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="./Em Breve.png"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="Estudos"
                >
                  
                </a>
                <span className="text-gray-600"> — </span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Study Async Card"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Study Async
              </a>
              <p className="mb-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione esse eum error veritatis, molestiae natus ad quisquam debitis voluptas ipsam eius deserunt sint quam necessitatibus sapiente aperiam nulla ipsa ipsum.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center p-1 rounded  bg-slate-300 font-semibold transition-colors duration-200 hover:bg-slate-400"
              >
                Deploy
              </a>
              <a
                href="/"
                aria-label=""
                className="ml-2 inline-flex items-center p-1 rounded  bg-slate-300 font-semibold transition-colors duration-200 hover:bg-slate-400"
              >
                Repositorio
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Blog;
