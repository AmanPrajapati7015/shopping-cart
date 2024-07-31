import styles from '../styles/product.module.css'
import starEmpty from '/icons/star-empty.svg'
import starFill from '/icons/star-fill.svg'

export default function Rating({rating}){
    let i = 0;
    const ratingIcons = [];
    while(i< Math.ceil(rating.rate)){
        ratingIcons.push(starFill);
        i++;
    }
    while(i<5){
        ratingIcons.push(starEmpty);
        i++;
    }

    return (
        <div className={styles.rating}>
            {ratingIcons.map((icon, i)=>{
                return <img key={i} src={icon} alt="" width='30px'/>
            })}
            <p>({rating.count})</p>
        </div>
    )
    
}