import styles from './styles/product.module.css'

export default function Quantity({qty,setQty}){
    const low = 1;
    const high = 20;


    function decrease(){
        if(qty>low){
            setQty(q=>--q);
        }
    }

    function increase(){
        if(qty<high){
            setQty(q=>++q);
        }
    }

    function handleChange(e){
        if(e.target.value >= low && e.target.value<=high){
            setQty(e.target.value);
        }
    }


    return (
        <div className={styles.quantityWrap}>
            <p>Quantity</p>
            <div className={styles.quantity}>
                <button className={styles.qtyChild+" "+styles.qtyBtn} onClick={decrease}>-</button>
                <input className={styles.qtyChild} value={qty} onChange={handleChange}/>
                <button className={styles.qtyChild+" "+styles.qtyBtn} onClick={increase}>+</button>
            </div>
        </div>
    )
}
