import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar"
import styles from "../styles/homepage.module.css";

export default function Homepage({bagCount}){

    const navigator = useNavigate();

    function redirect(to){
        navigator("/category/"+to);
    }

    return (
        <>
        <Navbar bagCount={bagCount}/>
        <h3 className={styles.freeShipping}>FREE SHIPPING ON ODERS ₹500+ </h3>
        <div className={styles.images}>
            <img className={styles.img} src="/homepage/home-1.jpg" alt="" width='20px'/>
            <img className={styles.img} src="/homepage/home-2.jpg" alt="" width='20px'/>
            <img className={styles.img} src="/homepage/home-3.jpg" alt="" width='20px'/>
        </div>
        <div className={styles.shop}>
            <h1 className={styles.head}>ELEVATE YOUR STYLE EMBRACE YOUR ESSENCE</h1>
            <p className={styles.head}>
                Join us on a journey of self-discovery through fashion, 
                where every outfit becomes a statement of your true self.
            </p>
            <div>
                <button className={styles.btn} onClick={()=>redirect('men')}>SHOP MEN</button>
                <button className={styles.btn} onClick={()=>redirect('women')}>SHOP WOMEN</button>
            </div>
        </div>
        </>
    )
}