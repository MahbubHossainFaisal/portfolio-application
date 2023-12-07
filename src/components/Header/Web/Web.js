
import React from 'react'
import classes from './Web.module.css'
const Web = () => {
    return (
        <div className={classes.web}>
           <div className={classes['web-option']}>
               <a href='#project'>
                    <i className="fi-rr-edit-alt"></i> Projects
               </a>
           </div>

            <div className={classes['web-option']}>
                <a href='https://github.com/MahbubHossainFaisal/Problem-Solving'>
                    <i className="fi-rr-browser option-icon"></i> Problem Solving C++
                </a>
            </div>
            <div className={classes['web-option']}>
                <a href='https://github.com/MahbubHossainFaisal/Python'>
                    <i className="fi-rr-browser option-icon"></i> Problem Solving Python
                </a>
            </div>
            <div className={classes['web-option']}>
                <a href='https://github.com/MahbubHossainFaisal/Data-Science'>
                    <i className="fi-rr-browser option-icon"></i> Data Science
                </a>
            </div>

            <div className={classes['web-option']}>
                <a href='#skills'>
                    <i className="fi-rr-computer"></i>Skills
                </a>
            </div>

            <div className={classes['web-option']}>
                <a href='#education'>
                    <i className="fi-rr-book-alt"></i> Education
                </a>
            </div>

            <div className={classes['web-option']}>
                <a href='#achievements'>
                    <i className="fi-rr-trophy"></i> Achievements
                </a>
            </div>

            <div className={classes['web-option']}>
                <a href='#contact'>
                    <i className="fi-rr-user-add"></i> Contact
                </a>
            </div>
        </div>
    )
}

export default Web
