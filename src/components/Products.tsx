import { useContext, useEffect } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import styles from '../styles/components/Products.module.css';
import NewProduct from './NewProduct';

export default function Products() {
    const { datas, products } = useContext(ProductsContext);

    useEffect(() => {
        products()
    }, []);

    const productsList = datas.map(data => (        
         <NewProduct 
             id={data.sys.id}
             key={data.sys.id}
             name={data.fields.title}
             image={data.fields.image.url}
             price={data.fields.price}
             item={data}
        />
        ) 
    )

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Our Products</h1>

            <div className={styles.productSection}>
                {productsList}
            </div>
        </div>
    )
}