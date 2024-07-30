import Navbar from './navbar'
import Quantity from './quantity'

import favIcon from '/icons/fav-black.svg'
import delIcon from '/icons/delete.svg'


import styles from './styles/bag.module.css'

const bag = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        quantity: 3,
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        quantity: 1,

    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        quantity: 5,
    }
]


export default function Bag(){

    return (<>
        <Navbar/>
        <div className={styles.container+" wrapper"}>
            <h1>Your Bag</h1>
            <div className={styles.bag}>
                <div className={styles.items}>
                    {bag.map((item,i)=>{
                        return <BagItem item={item} key={i}/>
                    })}
                </div>
                <Summary/>
            </div>
        </div>

    </>)
}




function BagItem({item}){
    return (
    <div className={styles.item}>
        <div className={styles.preview}>
            <img src={item.image} className={styles.img} alt=""/>
        </div>
        <div className={styles.info}>
            <div className={styles.title}>
                <h2>{item.title}</h2>
                <p>₹ {Math.floor(item.price*70)}</p>
            </div>
            <Quantity qty={item.quantity}/>
            <div className={styles.icons}>
                <img src={favIcon} alt="" />
                <img src={delIcon} alt="" />

            </div>
        </div>
    </div>
    )
}

function Summary(){

    return (
        <div className={styles.summary}>
            <h2 className={styles.summaryChild} >Order Summary</h2>
            <div className={styles.details+" "+styles.summaryChild}>
                <div className={styles.detailItem}>
                    <p>Subtotal</p>
                    <p>$79.9</p>
                </div>
                <div className={styles.detailItem}>
                    <p>Shipping & Handling Fee</p>
                    <p>-</p>
                </div>
                <div className={styles.detailItem}>
                    <p>Tax (GST)</p>
                    <p>$79.9</p>
                </div>
            </div>
            <div className={styles.summaryChild+" "+styles.detailItem}>
                <p>Total</p>
                <p>$79.9</p>
            </div>
            <button className={styles.checkout}>Checkout</button>
        </div>
    )
}