import React from 'react'
import classes from './ExperienceCard.module.css'

const ExperienceCard = ({ item }) => {
    return (
        <div className={classes['experience-card']}>
            <div className={classes['company-logo']}>
                <img src={item.logo} className={classes['education-logo']} alt='education-logo' />
            </div>
            <div className={classes['experience-info']}>
                <label className={classes['status']}>{item.status}</label>
                <div className={classes['company-name']}>{item.institute}</div>
                <div className={classes.year}>
                    <label>{`(${item.year})`}</label>
                </div>
                <div className={classes.result}>
                    <p className={classes.skillColor}>Key Skills - {item.skills}</p>
                </div>
                <div className={classes.result}>
                    <p>{item.works}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ExperienceCard
