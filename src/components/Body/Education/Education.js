
import React from 'react'
import EducationCard from '../../../UI/Education-Card/EducationCard'
import Seperator from '../../../UI/Seperator/Seperator'
import EducationData from '../../data/EducationData'
import classes from './Education.module.css'
const Education = () => {
    const data = EducationData
    return (
        <div className={classes.education}>
            <Seperator />
            <h1 className={classes['section-title']}>Education</h1>
            <div className={classes['education-list']}>
                {data.map((item,index) =>{
                    return <EducationCard item={item} key={index} />
                })}
            </div>
        </div>
    )
}

export default Education
