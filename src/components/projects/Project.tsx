import React from 'react';
import ProjectDescription from './ProjectDescription';
import ProjectImage from './ProjectImage';

export default (props: any) => {
  const project = props.project ? props.project : { title: '', description: '', srcImage: '' }

  return (
    <div className="projeto grid grid-cols-12 mb-8">
      {props.invert ? <ProjectDescription project={project} /> : ''}
      <ProjectImage srcImage={project.srcImage} />
      {props.invert ? '' : <ProjectDescription project={project} />}
    </div>
  )
}