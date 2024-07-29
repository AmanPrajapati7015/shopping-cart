import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {toTitleCase} from './utils'

import categoriesMap from './data/categories'
import styles from './styles/categories.module.css'



export default function CategoryPage(){

    const category  = categoriesMap[useParams().category];
    if(!category) return 'This type of items are not preent';

    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/'+category)
        .then(resp => resp.json())
        .then(res=>{
            setProducts(res);
            setLoading(false);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])



    return (
        <div className={styles.container+" wrapper"}>
            <h1>{toTitleCase(category)}</h1>
            <div className={styles.products}>
                {loading? 
                    'Loading Products..' :
                    products.map((product, i)=>{
                        return <ProductCard key={i} product={product}/>
                    })
                }
            </div>
        </div>
    )
    
}

function ProductCard({product}){

    const navigator = useNavigate();

    function handleClick(id){
        navigator('/product/'+id);
    }


    return (
        <div className={styles.card} onClick={()=>handleClick(product.id)}>
            <div className={styles.placeholder}>
                <img className={styles.productImg} src={product.image} alt=""  />
            </div>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p>₹ {Math.round(product.price*70)}</p>
        </div>
    )
}