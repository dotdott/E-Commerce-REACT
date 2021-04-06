import { createContext, ReactNode, useState } from "react";
import { setCartItemsProps } from "./CartItemsContext";

interface ProductsContextData {
    datas: setCartItemsProps[];
    setDatas: React.Dispatch<React.SetStateAction<setCartItemsProps[]>>
    products: () => void;
}

interface ProductsProviderProps{
    children: ReactNode;
}

export const ProductsContext = createContext({} as ProductsContextData);

export function ProductsProvider({children}: ProductsProviderProps) {
    const [datas, setDatas] = useState<setCartItemsProps[]>([]);

    const products = () => {
        fetch('products.json',{
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }    
        )
        .then(response => {
            return response.json();
        })
        .then(products =>{
            setDatas(products.items)
        })
    }

    return(
        <ProductsContext.Provider value={{
            datas,
            setDatas,
            products
        }}>
            {children}
        </ProductsContext.Provider>    
    )
}