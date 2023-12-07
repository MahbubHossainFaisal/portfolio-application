
import React from 'react'
import EducationCard from '../../../UI/Experience-Card/ExperienceCard'
import Seperator from '../../../UI/Seperator/Seperator'
import ExperienceData from '../../data/ExperienceData'
import classes from './Experiencee.module.css'
const Experience = () => {
    const data = ExperienceData
    return (
        <div className={classes.education}>
            <Seperator />
            <h1 className={classes['section-title']}>Experience</h1>
            <div className={classes['education-list']}>
                {data.map((item,index) =>{
                    return <EducationCard item={item} key={index} />
                })}
            </div>
        </div>
    )
}

export default Experience
