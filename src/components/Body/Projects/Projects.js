import React from 'react'
import classes from './Projects.module.css'
import ProjectData from '../../data/ProjectData'
import ProjectCard from '../../../UI/Project-Card/ProjectCard'
import Seperator from '../../../UI/Seperator/Seperator'
const Projects = () => {
    const data = ProjectData

    return (
        <div className={classes.projects}>
            
            <Seperator />
            <h1 className={classes['section-title']}>Projects</h1>
            <div>
                {data.map((project,index)=>{
                    return <ProjectCard key={index} project={project} />
                })}
            </div>
        </div>
    )
}

export default Projects
