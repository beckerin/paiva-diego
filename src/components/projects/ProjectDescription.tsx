import React from 'react';
import Link from '../general/Link';
import ProjectBadges from './ProjectBadges';

export default (props: any) => {
  const project = props.project
  const linkTo = 'Visitar Projeto'
  const techsUsed = 'Tech Usadas'

  return (
    <div className="lateral col-span-7 px-4">
      <h3 className="title text-xl text-center mb-4 mt-6">
        {project.title}
      </h3>
      <p className="desription mb-8">
        {project.description}
      </p>
      <div className="badge  max-w-5xl">
        <h3 className="badge__title title text-xl text-center mb-4 mt-6">
          {techsUsed}
        </h3>
        <div className="badge__list flex justify-center flex-wrap gap-2">
          {project.techs.map((tech: any) => (
            <ProjectBadges name={tech} />
          ))}
        </div>
      </div>
      <div className="linkTo title mt-8 text-center">
        <Link href={project.srcLink}>{linkTo}</Link>
      </div>
    </div>
  )
}
