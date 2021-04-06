import React, { createContext, ReactNode, useState } from "react";


interface CartItemsContextData{
    modal: boolean;
    toggleModal: () => void;
    onAdd: (product: setCartItemsProps) => void;
    onRemove: (product: setCartItemsProps) => void;
    cartItems: setCartItemsProps[];
    setCartItems: React.Dispatch<React.SetStateAction<setCartItemsProps[]>>;
    totalPrice: number;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

interface CartItemsProviderProps {
    children: ReactNode;
}

export interface CartSysData{
    id: string;
}

export interface CartImageData{
    url: string;
}

export interface CartFieldsData{
    title: string;
    price: number;
    image: CartImageData;
}

export interface setCartDataProps{
    sys: CartSysData;
    fields: CartFieldsData;
    gabriel: string;
}

export interface setCartItemsProps {
    items?: setCartDataProps;
    fields: CartFieldsData;
    sys: CartSysData;
    qty: number;
}


export const CartItemsContext = createContext({} as CartItemsContextData);

export function CartItemsProvider({children}: CartItemsProviderProps) {
    const [cartItems, setCartItems] = useState<setCartItemsProps[]>([]);

    const [modal, setModal] = useState<boolean>(false);

    const [totalPrice, setTotalPrice] = useState(0);

    function toggleModal(){
        setModal(!modal)
    }


    const onAdd = (product: setCartItemsProps) => {
        const exists = cartItems.find(item => item.sys.id === product.sys.id);

        if(exists){
            console.log(exists.fields.price)
            setTotalPrice(previousPrice => previousPrice + exists.fields.price)
            setCartItems(
                cartItems.map(item => 
                    item.sys.id === product.sys.id ? { ...exists, qty: exists.qty + 1} : item    
                )
            );
        } else {
            setTotalPrice(previousPrice => previousPrice + product.fields.price);

            setModal(true);

            setCartItems([...cartItems, {...product, qty: 1}]);
        }
    }

    const onRemove = (product: setCartItemsProps) => {
        const exists = cartItems.find(item => item.sys.id === product.sys.id);

        if(exists && exists.qty > 1) {
            setTotalPrice(previousPrice => previousPrice - exists.fields.price);

            setCartItems(
                cartItems.map(item =>
                    item.sys.id === product.sys.id ? {...exists, qty: exists.qty - 1} : item
                )
            )
        } else {
            setTotalPrice(previousPrice => previousPrice - product.fields.price)

            const newCart = cartItems.filter(item => item.sys.id !== product.sys.id);
            setCartItems(newCart)
        }

    }

    return (
        <CartItemsContext.Provider value={{
            modal,
            toggleModal,
            onAdd,
            cartItems,
            setCartItems,
            onRemove,
            totalPrice,
            setTotalPrice
        }}>
            {children}
        </CartItemsContext.Provider>
    )
}