import React from 'react'

import projectList from './projects'
import style from './style.styl'

const ProjectEl = ({ p }) =>
  <figure className={style.project}>
    <a href={p.url}>
      <img src={p.image} alt={p.name}/>
      <figcaption>{p.name}</figcaption>
    </a>
  </figure>

const Projects = () => (
  <div className={style.container}>
    <h2 className={style.heading}>Projects</h2>
    <div className={style.projectList}>
      { projectList.map(p => <ProjectEl p={p}/>)}
    </div>
  </div>
 )

export default Projects
