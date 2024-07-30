import logo from '/navbar/logo.png'
import profileLogo from '/navbar/profile.svg'
import favLogo from '/navbar/fav.svg'
import bagLogo from '/navbar/bag.svg'
import menuIcon from '/navbar/menu.svg'

import {toTitleCase} from './utils'
import styles from './styles/navbar.module.css'

import categoriesMap from './data/categories'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const sectionsArray = [];
for(let key in categoriesMap){
    sectionsArray.push(key)
}

export default function Navbar({bagCount}){
    
    const navigator = useNavigate();
    
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    function handleClick(e){
        // console.log(e.target);
        let section = e.target.textContent.toLowerCase();
        navigator('/category/'+ section);
        setIsMenuOpen(false);
    }

    return (
        <nav className={styles.container+ " wrapper"} >

            <div className="logo">
                <img src={logo} alt="" height='45px' onClick={()=>navigator('/')}/>
            </div>

            <div className={styles.middleSection}>
                {sectionsArray.map((section, i)=>{
                    return <h2 key={i} className={styles.sectionItem} onClick={handleClick}>{toTitleCase(section)}</h2>
                })}
            </div>

            <div className={styles.icons}>
                <img src={profileLogo} alt="" />
                <img src={favLogo} alt="" />
                <div className={styles.bagWrap} onClick={()=>navigator('/bag')}>
                    <img src={bagLogo} alt=""  />
                    {bagCount>0 &&
                    <span className={styles.bagCount}>{bagCount}</span>
                    }
                </div>
            </div>

            <div className={styles.menuButton} onClick={handleMenuToggle}>
                <img src={menuIcon} alt="" />
            </div>

            {/* Responsive Menu */}
            {isMenuOpen && (
                <div className={styles.mobileMenu}>
                    {sectionsArray.map((section, i) => (
                        <h2 key={i} className={styles.sectionItem} onClick={handleClick} >{toTitleCase(section)}</h2>
                    ))}
                    <hr className={styles.hr}/>
                    <h2>Profile</h2>
                    <h2>Favorite</h2>
                    <h2 onClick={() => {navigator('/bag');setIsMenuOpen(false)}} >Bag</h2>
                </div>
            )}
        </nav>
    )
}
