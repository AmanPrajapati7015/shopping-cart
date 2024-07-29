import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {toTitleCase} from './utils'
import styles from './styles/categories.module.css'


const categoriesMap = {
    men: "men's clothing",
    women: "women's clothing",
    jewelery: "jewelery",
    electronics: "electronics"
}

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
    return (
        <div className={styles.card}>
            <div className={styles.placeholder}>
                <img className={styles.productImg} src={product.image} alt=""  />
            </div>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p>₹ {Math.round(product.price*70)}</p>
        </div>
    )
}