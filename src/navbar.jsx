import logo from '/navbar/logo.png'
import profileLogo from '/navbar/profile.svg'
import favLogo from '/navbar/fav.svg'
import bagLogo from '/navbar/bag.svg'

import { useState } from 'react'
import {toTitleCase} from './utils'
import styles from './navbar.module.css'



const sectionsArray = ['men', 'women', 'kids', 'sale']


export default function Navbar(){
    
    const [active, setActive] = useState(null);
    

    function handleClick(e){
        setActive(e.target.textContent.toLowerCase());
    }

    return (
        <nav className={styles.container+ " wapper"} >
            <div className="logo">
                <img src={logo} alt="" height='45px'/>
            </div>
            <div className={styles.middleSection}>
            {
                sectionsArray.map((section, i)=>{
                    if(section == active)
                        return <h2 key={i} className={styles.sectionItem+" "+styles.active}>{toTitleCase(section)}</h2>
                    return <h2 key={i} className={styles.sectionItem} onClick={handleClick}>{toTitleCase(section)}</h2>
                })
            }
            </div>



            <div className={styles.icons}>
                <img src={profileLogo} alt="" />
                <img src={favLogo} alt="" />
                <img src={bagLogo} alt="" />
            </div>
        </nav>
    )
}
