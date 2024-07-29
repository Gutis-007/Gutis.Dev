import React from 'react';



const Sobremim = () => {
    return (
    <div className=' min-h-screen bg-slate-900'>
        <div className='flex flex-col items-center'>
                <h1 className="text-2xl font-bold mb-1 mt-8 text-white lg:text-4xl">Sobre mim</h1>
                <img className=' mb-8' src="./public/Retangulo1.svg" alt="" />
            </div>
        <div className="flex flex-col lg:flex-row items-center min-h-screen bg-slate-900">
            <img className="rounded-3xl lg:ml-32 8 mb-8 border-2 shadow-2xl shadow-indigo-950 border-indigo-900 " src="./public/Minha foto.png" alt="" />
        <div className="lg:flex-1 flex flex-col text-center lg:text-left lg:ml-32 ">
          <h1 className="text-2xl font-bold mb-4 text-white lg:text-5xl">Gustavo da Silva Ferreira</h1>
          <p className="text-1xl font-regular text-white mt-4 lg:mr-52 lg:text-left lg:text-3xl">
            Tenho 20 anos, sou natural da Bahia, nascido na cidade de Feira de Santana <br/><br/>

            Sou desenvolvedor Full-Stack e estudante de Sistemas de Informação no IFBA. Adoro aprender coisas novas e estou sempre em movimento, seja desenvolvendo um novo projeto ou explorando novas tecnologias. <br/><br/>

            Segue abaixo algumas habilidades e projetos que realizei.
          </p>
          
        </div>
      </div>
    </div>
    );
}
export default Sobremim;
