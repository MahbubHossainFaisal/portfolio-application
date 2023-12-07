import React from 'react'
import Seperator from '../../../UI/Seperator/Seperator'
import classes from './Achievements.module.css'
const Achievements = () => {
    return (
        <div className={classes.achievements}>
            <Seperator />
            <h1 className={classes['section-title']}>Achievements</h1>
            <div className={classes['achievement-list']}>
                <div className={classes['achievement-img']}>
                    <img src={require('../../../assets/award/award.png')} alt='award' />
                </div>
                   <div className={classes.list}>
                    <p>
                        <i className="fi-rr-trophy"></i>
                        <span>Talent Pool Scholarship in 5th grade</span>
                    </p>

                    <p>
                        <i className="fi-rr-trophy"></i>
                        <span>Talent Pool Scholarship in JSC</span>
                    </p>

                    <p>
                        <i className="fi-rr-trophy"></i>
                        <span>General Scholarship in SSC</span>
                    </p>
                    <p>
                        <i className="fi-rr-trophy"></i>
                        <span>Completed these below courses till date</span>
                    </p>
                    <div className={classes.courses}>
                        
                            
                            <ul className={classes['course-list']}>
                                <li>
                                    <i className="fi-rr-badge"></i>
                                    <a href='https://www.coursera.org/account/accomplishments/certificate/HDSNTG4UD8K4'>Introduction to HTML: Coursera</a>
                                </li>
                                <li>
                                    <i className="fi-rr-badge"></i>
                                    <a href='https://www.coursera.org/account/accomplishments/certificate/RGHDS53UM8EZ'>Introduction to CSS: Coursera</a>
                                </li>
                                <li>
                                    <i className="fi-rr-badge"></i>
                                    <a href='https://www.coursera.org/account/accomplishments/certificate/2FFY5CERCPYQ'>Interactivity with JavaScript: Coursera</a>
                                </li>
                                <li>
                                    <i className="fi-rr-badge"></i>
                                    <a href='https://www.coursera.org/account/accomplishments/certificate/ERLCGDECRHQA'>Advanced Styling with Responsive Design: Coursera</a>
                                </li>
                                <li>
                                    <i className="fi-rr-badge"></i>
                                    <a href='https://www.coursera.org/account/accomplishments/certificate/U23SMYCFTFWB'>Front-End Web Framework-Bootstrap4: Coursera</a>
                                </li>
                                <li>
                                    <i className="fi-rr-badge"></i>
                                    <a href='https://www.coursera.org/account/accomplishments/certificate/JYLUNR97ARUB'>Frontend Development with React: Coursera</a>
                                </li>
                                <li>
                                    <i className="fi-rr-badge"></i>
                                    <a href='https://www.coursera.org/account/accomplishments/certificate/AFEWP3VHUV3A'>Introduction to Git and Github: Coursera</a>
                                </li>
                                <li>
                                    <i className="fi-rr-badge"></i>
                                    <a href='https://www.udemy.com/certificate/UC-cf02aed8-af02-4c37-9b66-f4ad309a33e7/'>The Complete Qlikview Bootcamp: Udemy</a>
                                </li>
                                <li>
                                    <i className="fi-rr-badge"></i>
                                    <a href='https://learn.microsoft.com/en-us/users/MAHBUBHOSSAINFAISAL-0198/credentials/58840AA5F11F9341'>Microsoft Certified: Azure Fundamentals</a>
                                </li>
                                <li>
                                    <i className="fi-rr-badge"></i>
                                    <a href='https://www.freecodecamp.org/certification/mahbubhossain/relational-database-v8'>Relational Database: Freecodecamp</a>
                                </li>
                                <li>
                                    <i className="fi-rr-badge"></i>
                                    <a href='https://www.coursera.org/account/accomplishments/specialization/JAUQ48YC9MNX?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n'>
                                        Mathematics for Machine Learning and Data Science Specialization: Deeplearning.ai
                                    </a>
                                </li>
                                <li>
                                    <i className="fi-rr-badge"></i>
                                    <a href='https://www.coursera.org/account/accomplishments/verify/ZXQ4H39YXTZF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'>
                                        Prompt Engineering for ChatGPT: Vanderbilt University
                                    </a>
                                </li>
                                <li>
                                    <i className="fi-rr-badge"></i>
                                    <a href='https://www.datacamp.com/statement-of-accomplishment/track/d72fb355fc9e8cfbff8cf1712e7884a86df41d1e?raw=1'>
                                        Data Analyst with Python: Datacamp
                                    </a>
                                </li>
                            </ul>
                        
                    </div>
                   </div>
                
            </div>
        </div>
    )
}

export default Achievements
