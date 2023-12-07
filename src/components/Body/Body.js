import React from 'react'
import Projects from './Projects/Projects'
import About from './About/About'
import Skills from './Skills/Skills'
import Education from './Education/Education'
import Contact from './Contact/Contact'
import Achievements from './Acheivements/Achievements'
import classes from './Body.module.css'
import Experience from './Experience/Experience'
const Body = (props) => {
    return (
        <div className={classes.body}>
            <div>
                <About isOpen={props.isOpen} />
            </div>
            <div id='experience'>
                <Experience />
            </div>
            <div id='education'>
                <Education />
            </div>
            <div id='achievements'>
                <Achievements />
            </div>
            <div id='skills'>
                <Skills />
            </div>
            <div id='project'>
                <Projects />
            </div>
            
            <div id='contact'>
                <Contact />
            </div>
        </div>
    )
}

export default Body
