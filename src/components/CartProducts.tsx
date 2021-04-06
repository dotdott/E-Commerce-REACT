import { useContext } from 'react';
import { CartItemsContext, setCartItemsProps } from '../contexts/CartItemsContext';
import styles from '../styles/components/CartProducts.module.css';

interface CartProductsProps {
    image: string;
    item: setCartItemsProps;
    id: string;
    amount: number;
}

export default function CartProducts({
    image,
    item, 
    id, 
    amount
}: CartProductsProps) {
    const { onAdd, onRemove } = useContext(CartItemsContext);
    return (      
        <div className={styles.cartProduct} id={id}>
            <div className={styles.productImg}>
                <img src={image} alt="product"/>
            </div>

            <div className={styles.productAmount}>
                <span>
                    <img src="arrow-up.svg" alt="increase" onClick={() => onAdd(item)}/>
                </span>
                <p>{amount}</p>
                <span>
                    <img src="arrow-down.svg" alt="decrease" onClick={() => onRemove(item)}/>
                </span>
            </div>
    </div>
    )
}