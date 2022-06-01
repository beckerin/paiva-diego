import React from 'react';
import Project from './Project'

export default (props: any) => {
  const projects = [
    {
      id: 1,
      title: 'nDapp',
      description: "Uma plataforma descentralizada de demonstração de dados sobre dapps de uma rede blockchain chamada Neo (N3)",
      srcImage: 'ndapp.png',
      techs: ['Vue.JS','TypeScript','TailwindCSS','Kotlin','MySQL','Git','GitHub'],
      srcLink: 'https://ndapp.org/'
    },
    {
      id: 2,
      title: 'Sharity',
      description: "Uma plataforma para contribuição monetária para clientes e usuários, a plataforma oferece meios de pagamentos recorrentes como assinatura, ou como pagamento simples.",
      srcImage: 'sharity.png',
      techs: ['Vue.JS','TypeScript','TailwindCSS','Kotlin','MySQL','Git','BitBucket'],
      srcLink: 'https://sharity.com.br/'
    },
    {
      id: 3,
      title: 'iTrack',
      description: "Site que tem como objetivo cadastrar cargas a serem rastreadas em tempo real, possui uma grande variedades de cargas a serem rastreadas",
      srcImage: 'itrack.png',
      techs: ['Vue.JS','JavaScript','TailwindCSS','Kotlin','MySQL','Git','BitBucket', 'IntelliJ IDEA'],
      srcLink: 'https://itrackbrasil.com.br/'
    },
    {
      id: 4,
      title: 'Eucatur',
      description: "Site de pagamentos via link, que tratava todo o trafégo de pagamento e redicionava diferentes cartões a diferentes endpoints",
      srcImage: 'eucatur.png',
      techs: ['Vue.JS','JavaScript','CSS3','Go','Postgres','Git','GitHub','Visual Studio Code','GoLand'],
      srcLink: 'https://www.eucatur.com.br/'
    },
  ]

  return (
    <div className="flex justify-center">
      <div className="md:mx-16 mx-4">
        <h1 className="title col-span-12 text-2xl xl:text-5xl text-center mb-16">
          Projetos
        </h1>
        <div className="projetoList">
          {projects.map((project: any) => (
            <Project
              key={project.id}
              project={project}
              invert={project.id % 2 == 0}
            />
          ))}
        </div>
      </div>
    </div>
  )
}