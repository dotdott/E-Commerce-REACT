import { useContext } from 'react';
import { CartItemsContext } from '../contexts/CartItemsContext';
import styles from '../styles/components/Navbar.module.css';
import Cart from './Cart';

export default function Navbar(){
    const {toggleModal, cartItems} = useContext(CartItemsContext);

    return(
        <div className={styles.container}>
            <div className={styles.containerContent}>
                <img src="bars-solid.svg" alt="Hamburger Menu" className={styles.bars}/>
                <img src="./Gaming-logo.svg" alt="logo"/>
                <div className={styles.cartSection}>
                    <img 
                        src="cart-plus-solid.svg" 
                        alt="cart" 
                        className={styles.cart}
                        onClick={toggleModal}
                    />
                    <p className={styles.cartItems}>{cartItems.length}</p>
                    <Cart />
                </div>
            </div>
        </div>
    )
}