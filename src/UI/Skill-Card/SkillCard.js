import React from 'react'
import classes from './SkillCard.module.css'

const SkillCard = ({skill}) => {
    return (
        <div className={classes['skill-card']}>
            <div className={classes['skill-icon']}>
                {skill.icon}
            </div>
            <label className={classes['skill-name']}>
                {skill.name}
            </label>
        </div>
    )
}

export default SkillCard
