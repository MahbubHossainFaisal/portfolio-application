import React from 'react'
import classes from './ProjectCard.module.css'
const ProjectCard = ({project}) => {
    return (
        <div className={classes['project-card']}>
            <div className={classes['project-info']}>
               <label className={classes['project-title']}>{project.title}</label> 
               <div className={classes['project-links']}>
                  {project.link && <a className={classes['project-link']} href={project.link}>
                      <div className={classes['link-button']}>
                            <i className="devicon-github-original colored"></i> Github
                      </div>
                      
                      </a>}
               </div>

               <p>{project.desc}</p>

               <div className={classes['project-tools']}>
                   {project.tools.map((tool,index) =>{
                       return(
                           <label key={index} className={classes.tool}> {tool} </label>
                       )
                   })}
               </div>
            </div>
            <img src={project.image} className={classes['project-photo']} alt='project' />
        </div>
    )
}

export default ProjectCard
