import Navbar from './navbar'
import Quantity from './quantity'
import Summary from './summary'

import favIcon from '/icons/fav-black.svg'
import delIcon from '/icons/delete.svg'


import styles from './styles/bag.module.css'
import { useEffect, useState } from 'react'




export default function Bag({bag,setBag}){

    return (<>
        <Navbar/>
        <div className={styles.container+" wrapper"}>
            <h1>Your Bag</h1>
            <div className={styles.bag}>
                <div className={styles.items}>
                    {bag.map((item)=>{
                        return <BagItem item={item} key={item.id}  setBag={setBag}/>
                    })}
                </div>
                <Summary  bag={bag}/>
            </div>
        </div>

    </>)
}




function BagItem({item, setBag}){

    const [qty, setQty]  = useState(item.quantity);

    useEffect(()=>{
        setBag(bag=>{
            for(let obj of bag){
                if(obj.id == item.id){
                    obj.quantity = qty;
                }
            }
            return [...bag];
           
        })
    }, [qty]);

    function handleDelete(){
        setBag(bag=>{
            const updatedBag = bag.filter(bagItem=> bagItem.id !== item.id);
            return updatedBag;
        })
    }


    return (
    <div className={styles.item}>
        <div className={styles.preview}>
            <img src={item.image} className={styles.img} alt=""/>
        </div>
        <div className={styles.info}>
            <div className={styles.title}>
                <h2>{item.title}</h2>
                <p>₹ {Math.ceil(item.price*70)}</p>
            </div>
            <Quantity qty={qty} setQty={setQty}/>
            <div className={styles.icons}>
                <img src={favIcon} alt="" />
                <img src={delIcon} alt="" onClick={handleDelete}/>

            </div>
        </div>
    </div>
    )
}

