import React from 'react'
import Seperator from '../../../UI/Seperator/Seperator'
import SocialContact from '../../Social/SocialContact'
import classes from './Contact.module.css'

const Contact = () => {
    return (
        <div className={classes.contact}>
            <Seperator />
            <h1 className={classes['section-title']}>Contact Me</h1>
            <div className={classes['contact-container']}>
                <div className={classes['contact-left']}>
                    <p>Want to get in touch? Contact me in any of the platform!</p>
                    <SocialContact />
                </div>
            </div>
        </div>
    )
}

export default Contact
