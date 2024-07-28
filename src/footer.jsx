import styles from './styles/footer.module.css'
import {infoCols , icons } from './data/footer-data'

export default function Footer(){
    return (
        <>
            <FooterTop/>
            <FooterBottom/>
        </>
    )
}

function FooterTop(){
    return (
        <div className={styles.footerTop+" wrapper"}>
            <div className={styles.textContainer}>
                <h2>BECOME A MEMBER</h2>
                <p>Get free shipping, member-only discounts, and exclusive access to products when you join.</p>
            </div>
            <button className={styles.signup} >Sign up for free</button>
        </div>
    )
}

function FooterBottom(){
    return(
        <div className={styles.footerBottom+" wrapper"}>
            <div className={styles.right}>
                <TopRight/>
                <p className={styles.infoItem}>Made by Aman Prajapati</p>
            </div>

           
            <div className={styles.left}>
                <TopLeft />
                <BottomLeft />
            </div>
            

        </div>
    )
}




function TopRight(){
    return(
        <div className={styles.topRight}>
        {
            infoCols.map((infocol, i)=>{
                return (
                    <InfoColumn key={i} infocol={infocol}/>
                )
            })
        }
        </div>
    )
}



function InfoColumn({infocol}){
    return (
        <div className={styles.infoCol} >
            <h3>{infocol.title}</h3>
            {
                infocol.items.map((item,i)=>{
                    return <p key={i} className={styles.infoItem}> {item}</p>
                })
            }
        </div>
    )
}

function TopLeft(){
    return (
        <div  className={styles.topLeft}>
            {
            icons.map((icon, i)=>{
                return <img key={i} src={icon} height='30px' />
            })
            }
        </div>
    )
}

function BottomLeft(){
    return (
        <div className={styles.bottomLeft}>
            <p className={styles.infoItem}>Privacy Policy</p>
            <p className={styles.infoItem}>Terms and Conditions</p>
            <p className={styles.infoItem}>Accessibility Policy</p>
        </div>
    )
}