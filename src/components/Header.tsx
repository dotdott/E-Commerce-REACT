import styles from '../styles/components/Header.module.css';

export default function Header() {
    return(
        <div className={styles.containerHead}>
            <img src="hyperX-kit.jpg" alt="kit gamer image header"/>
           <div className={styles.containerContent}>
                <h1>Kit Gamer</h1>
                <button>SHOP NOW</button>
           </div>
        </div>
    )
}