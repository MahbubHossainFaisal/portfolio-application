import React from 'react'
import SocialData from '../data/SocialData'
import classes from './SocialContact.module.css'
const SocialContact = () => {
    const data = SocialData
    return (
        <div className={classes['social-contact']}>
          {data.map((item,index) => {
              return (
                  
                 <a href={item.link} key={index}>
                     
                     <div className={classes['social-icon-div']}>
                         <img src={item.icon} className={classes['social-icon']} alt='icon' />
                     </div>
                 </a>
              )
          })}
        </div>
    )
}

export default SocialContact
