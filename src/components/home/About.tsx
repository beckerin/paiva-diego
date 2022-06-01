import React from 'react';

export default () => {
  const title = 'Sobre min'
  const description = 'Sou um jovem de 24 anos que tem atuado na área de desenvolvimento web. A ideia partiu de uma fagulha inicial no ensino médio (3º ciclo) devido a grande disponibilidade de vagas no mercado de trabalho, a partir de cursos profissionalizantes aprimorei meus conhecimentos a ponto de ser reconhecido e convidado a trabalhar para algumas empresas da minha antiga região. Através de aprendizagem contínua, continuo aprendendo novas ferramentas e maneiras diferentes de resolver problemas.'
  
  return (
    <div className="flex justify-center">
      <div className="w-screen h-128">
        <img className="object-none h-full w-full opacity-30 -mt-18" src="./img/pattern-small-plastic.jpg" />
      </div>
      <div className="absolute md:mx-16 mx-4 pt-16">
        <h1 className="title col-span-12 text-2xl xl:text-5xl text-center mb-16">
          {title}
        </h1>
        <h2 className="description md:text-xl max-w-5xl text-justify mb-16">
          {description}
        </h2>
      </div>
    </div>
  )
}