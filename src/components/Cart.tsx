import { useContext } from 'react';
import { CartItemsContext } from '../contexts/CartItemsContext';
import styles from '../styles/components/Cart.module.css';
import CartProducts from './CartProducts';

export default function Cart() {
    const {modal, toggleModal, cartItems } = useContext(CartItemsContext);


    const items = cartItems.map(item => 
        <CartProducts 
            id={item.sys.id}
            key={item.sys.id}
            amount={item.qty}
            image={item.fields.image.url}
            item={item}
        />
    )

    const { totalPrice, setCartItems, setTotalPrice } = useContext(CartItemsContext);

    function clearCart() {
        setCartItems([]);
        setTotalPrice(0);
    }
    
    return(
        <div className={modal === false ? styles.container : styles.containerActive}>
            <div className={styles.cartContainer}>
                <img 
                    src="./close-solid.svg" 
                    alt="close cart"
                    onClick={toggleModal}
                />
                <div className={styles.cartItems}>
                    <h1>Your Cart</h1>

                        {items}
                    
                    <h3>Your Total: $ {totalPrice}</h3>
                    <button onClick={() => clearCart()}>CLEAR CART</button>
                </div>
            </div>
        </div>
    )
}