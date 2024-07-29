import { icons } from './data/footer-data'
import styles from './styles/product.module.css'
import starEmpty from '/icons/star-empty.svg'
import starFill from '/icons/star-fill.svg'
import favIcon from '/icons/fav.svg'


const product = {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
    "rate": 4.1,
    "count": 259
    }
    }

function Product(){
    return(
        <div className="wrapper">
            <div className={styles.product}>
                <div className="preview">
                    <img src={product.image} alt="" width='300px' />
                </div>
                <div className={styles.info}>
                    <div className={styles.infoTop}>
                        <h1>{product.title}</h1>
                        <Rating rating={product.rating}/>
                        <p className={styles.price}> ₹ {Math.round(product.price*70)}</p>
                    </div>
                    <div className={styles.infoBottom}>
                        <p className={styles.desc}>{product.description}</p>
                        <button className={styles.bagBtn}>Add to bag</button>
                        <button className={styles.favBtn}>
                            <p>Favorite</p> 
                            <img src={favIcon} height='20px'/>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

function Rating({rating}){
    let i = 0;
    const ratingIcons = [];
    while(i< Math.round(rating.rate)){
        ratingIcons.push(starFill);
        i++;
    }
    while(i<5){
        ratingIcons.push(starEmpty);
        i++;
    }

    return (
        <div className={styles.rating}>
            {
            ratingIcons.map((icon, i)=>{
                return <img key={i} src={icon} alt="" width='30px'/>
            })
            }
            <p>({rating.count})</p>
        </div>
    )
    
}

export default Product;