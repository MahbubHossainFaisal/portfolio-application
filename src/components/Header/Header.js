import React from 'react'
import classes from './Header.module.css'
import Mobile from './Mobile/Mobile'
import Web from './Web/Web'

const Header = (props) => {

    

    
    return (
        <div className={classes.header}>
            <div className={classes.logo}>
                <img src={require('../../assets/icons/code.png')} alt='code' height='70px' />
                
            </div>
            <div className={classes.menu}>
                <div className={classes['web-menu']}>
                   <Web />
                </div>
                <div className={classes['mobile-menu']}>
                    <div onClick={() => props.setIsOpen(!props.isOpen)}>
                        <i className="fi-rr-apps menu-icon"></i>
                    </div>
                    { props.isOpen && <Mobile isOpen={props.isOpen} setIsOpen={props.setIsOpen} /> }
                    
                </div>
            </div>
        </div>
    )
}

export default Header
