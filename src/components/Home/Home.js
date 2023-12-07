import React,{useState} from 'react'
import classes from './Home.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Body from '../Body/Body'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={classes.home}>
           <div>
                <Header isOpen={isOpen} setIsOpen={setIsOpen} />
           </div>
            <div>
                <Body isOpen={isOpen}/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
