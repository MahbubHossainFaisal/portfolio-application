import React from 'react'
import classes from './EducationCard.module.css'

const EducationCard = ({ item }) => {
    return (
        <div className={classes['education-card']}>
            <div className={classes['institute-logo']}>
                <img src={item.logo} className={classes['education-logo']} alt='education-logo' />
            </div>
            <div className={classes['education-info']}>
                <label className={classes['status']}>{item.status}</label>
                <div className={classes['institute-name']}>{item.institute}</div>
                <div className={classes.year}>
                    <label>{`(${item.year})`}</label>
                </div>
                <div className={classes.result}>
                    <p>Result- {item.result}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default EducationCard
