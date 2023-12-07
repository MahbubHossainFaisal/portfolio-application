import React from 'react'
import Seperator from '../../../UI/Seperator/Seperator'
import SocialContact from '../../Social/SocialContact'
import classes from './About.module.css'
const About = (props) => {
    const dynamicName ={
        display: 'none'
    }
    return (
        <div className={classes.about}>
            <div className={classes['about-top']}>
                <div className={classes['about-info']}>
                    <span role="img" area-label='hi'>👋 Hi there, I am</span>
                    <br /> <span className={classes['info-name']}>Mahbub Hossain Faisal</span>,
                    <br /> <span className={classes['info-subject']}>
                        <ul className={props.isOpen? dynamicName: classes['dynamic-info-subject']}>
                            <li><span>A Data Professional</span></li>
                            
                        </ul>
                    </span>
                </div>
                <div className={classes['about-photo']}>
                    <img src={require('../../../assets/Programmer.gif')} className={classes.image} alt='layout' />
                </div>
                   
            </div>
            <Seperator />
            <div className={classes['info-card']}>
                <span className={classes['Ds-card']}>
                    <i className="fas fa-code fa-3x"></i>
                    <h5>Problem Solving Enthusiast</h5>
                    <p>
                        I Love to solve DS & Algo problems and learn new techniques of problem solving
                    </p>
                </span>
                <span className={classes['Wd-card']}>
                    <i className="fas fa-globe fa-3x"></i>
                    <h5>Data Science Enthusiast</h5>
                    <p>Currently working on learning Data Science and Machine Learning concepts and projects</p>
                </span>
                
                <span className={classes['Mc-card']}>
                    <i className="fas fa-music fa-3x"></i>
                    <h5>Music Lover</h5>
                    <p>I'm very much passionate about listening to music and singing.Especially like the solo genre</p>
                </span>
            </div>
            <div className={classes['about-bottom']}>
                <SocialContact />
            </div>
        </div>
    )
}

export default About
