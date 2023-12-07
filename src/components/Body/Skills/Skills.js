import React from 'react'
import skillsData from '../../data/Skills'
import Seperator from '../../../UI/Seperator/Seperator'
import classes from './Skills.module.css'
import SkillCard from '../../../UI/Skill-Card/SkillCard'
const Skills = () => {
    const data = skillsData
    return (
        <div className={classes.skills}>
            <Seperator />
            <h1 className={classes['section-title']}>Skills</h1>
            <div className={classes['skills-container']}>
                {data.map((item,index) => {
                    return (
                        <div className={classes['skills-section']} key={index}>
                            <label className={classes['skills-section-title']}>{item.type}</label>
                            <div className={classes['skills-list']}>
                                {item.list.map((skill,index2) =>{
                                    return(
                                        <SkillCard key={index2}skill={skill} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
