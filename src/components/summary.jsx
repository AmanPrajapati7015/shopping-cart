import styles from '../styles/bag.module.css'

export default function Summary({bag}){

    let subtotal = 0;
    bag.forEach(item=>{
        subtotal += Math.ceil(item.price*70) * item.quantity;
    })

    return (
        <div className={styles.summary}>
            <h2 className={styles.summaryChild} >Order Summary</h2>
            <div className={styles.details+" "+styles.summaryChild}>
                <div className={styles.detailItem}>
                    <p>Subtotal</p>
                    <p>₹ {Math.ceil(subtotal)}</p>
                </div>
                <div className={styles.detailItem}>
                    <p>Shipping & Handling Fee</p>
                    <p>-</p>
                </div>
                <div className={styles.detailItem}>
                    <p>Tax (GST)</p>
                    <p>₹ {Math.ceil(subtotal*0.18)}</p>
                </div>
            </div>
            <div className={styles.summaryChild+" "+styles.detailItem}>
                <p>Total</p>
                <p>₹ {Math.ceil(subtotal*1.18)}</p>
            </div>
            <button className={styles.checkout}>Checkout</button>
        </div>
    )
}