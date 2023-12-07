import React from 'react'
import classes from './Mobile.module.css'
const Mobile = ({ isOpen, setIsOpen }) => {
    return (
        <div className={classes.mobile}>
            <div className={classes['close-icon']} onClick={() => setIsOpen(!isOpen)}>
                <i className="fi-rr-cross-circle"></i>
            </div>

            <div className={classes['mobile-options']}>
                <div className={classes['mobile-option']}>
                    <a href='#project'>
                        <i className="fi-rr-edit-alt"></i> Projects
                    </a>
                </div>

                <div className={classes['mobile-option']}>
                    <a href='https://github.com/MahbubHossainFaisal/Problem-Solving'>
                        <i className="fi-rr-browser option-icon"></i> Problem Solving C++
                    </a>
                </div>

                <div className={classes['mobile-option']}>
                    <a href='https://github.com/MahbubHossainFaisal/Python'>
                        <i className="fi-rr-browser option-icon"></i> Problem Solving Python
                    </a>
                </div>

                <div className={classes['mobile-option']}>
                <a href='https://github.com/MahbubHossainFaisal/Data-Science'>
                    <i className="fi-rr-browser option-icon"></i> Data Science
                </a>
                </div>

                <div className={classes['mobile-option']}>
                    <a href='#skills'>
                        <i className="fi-rr-computer"></i>Skills
                    </a>
                </div>

                <div className={classes['mobile-option']}>
                    <a href='#education'>
                        <i className="fi-rr-book-alt"></i> Education
                    </a>
                </div>

                <div className={classes['mobile-option']}>
                    <a href='#achievements'>
                        <i className="fi-rr-trophy"></i> Achievements
                    </a>
                </div>

                <div className={classes['mobile-option']}>
                    <a href='#contact'>
                        <i className="fi-rr-user-add"></i> Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobile
