import { useContext } from 'react'
import { CartItemsContext, setCartItemsProps } from '../contexts/CartItemsContext'
import styles from '../styles/components/NewProduct.module.css'

export interface NewProductProps {
    id?: string;
    image: string;
    name: string;
    price: number;
    item: setCartItemsProps;
}

export default function NewProduct({
    id,
    image,
    name,
    price,
    item
 }: NewProductProps) {
    const { onAdd } = useContext(CartItemsContext);

    return (
        <div className={styles.container} id={id}>
            <img src={image} alt="Products"/>
            <p>{name}</p>
            <p className={styles.price}>$ {price}</p>
            <button onClick={() => onAdd(item)}>Add to cart</button>
        </div>
    )
}