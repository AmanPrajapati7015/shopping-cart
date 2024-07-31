import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import styles from '../styles/product.module.css'
import favIcon from '/icons/fav.svg'

import Rating from '../components/rating'
import Navbar from '../components/navbar'
import Quantity from '../components/quantity'



function Product({setBag}){

    const id = useParams().id;

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [qty, setQty] = useState(1);

    const navigator = useNavigate();

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
    },[id])

    function handleAddToBag(){
        let found = false;
        setBag(bag=>{
            for(let item of bag){
                if(item.id == id){
                    item.quantity += qty;
                    found = true;
                }
            }
            if(found) return [...bag];
            else{
                const newItem = {
                    id:id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: qty
                }
                return [...bag,newItem]
            }
        })
        navigator('/bag');
    }



    return(
        <>
        <div className="wrapper">
            <div className={styles.product}>
                {loading?
                'Loading product...':

                <>
                <div className="preview">
                    <img src={product.image} alt="" width='300px' />
                </div>
                
                <div className={styles.info}>
                    <div className={styles.infoTop}>
                        <h1>{product.title}</h1>
                        <Rating rating={product.rating}/>
                        <p className={styles.price}> ₹ {Math.ceil(product.price*70)}</p>
                    </div>
                    <div className={styles.infoBottom}>
                        <p className={styles.desc}>{product.description}</p>
                        <Quantity qty={qty} setQty={setQty}/>
                        <button className={styles.bagBtn} onClick={handleAddToBag}>Add to bag</button>
                        <button className={styles.favBtn}>
                            <p>Favorite</p> 
                            <img src={favIcon} height='20px'/>
                        </button>
                    </div>
                </div>
                </>
                }
            </div>
        </div>
        </>
    )
}





export default Product;