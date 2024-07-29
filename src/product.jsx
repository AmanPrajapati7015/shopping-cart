import styles from './styles/product.module.css'
import favIcon from '/icons/fav.svg'
import Rating from './rating'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'



function Product(){

    const id = useParams().id;
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(resp => resp.json())
        .then(res=>{
            setProduct(res);
            setLoading(false);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])


    if (loading) return 'Loading product...'

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



export default Product;