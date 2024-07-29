import logo from '/navbar/logo.png'
import profileLogo from '/navbar/profile.svg'
import favLogo from '/navbar/fav.svg'
import bagLogo from '/navbar/bag.svg'

import {toTitleCase} from './utils'
import styles from './styles/navbar.module.css'

import categoriesMap from './data/categories'
import { useNavigate } from 'react-router-dom'

const sectionsArray = [];
for(let key in categoriesMap){
    sectionsArray.push(key)
}




export default function Navbar(){
    
    const navigator = useNavigate();

    function handleClick(e){
        let section = e.target.textContent.toLowerCase();
        navigator('/category/'+ section);
    }

    return (
        <nav className={styles.container+ " wrapper"} >


            <div className="logo">
                <img src={logo} alt="" height='45px'/>
            </div>


            <div className={styles.middleSection}>
            {
                sectionsArray.map((section, i)=>{
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
