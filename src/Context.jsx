import React, {createContext, useState} from 'react'


export const CartContext = createContext()


const CartProvider = ({children}) =>{

    const[carArray, setCartArray] = useState([])
    
    
    const addToCart = (producto, cantidad) => {

        const index = carArray.findIndex((i) => i.producto.id === producto.id);

        if (index > -1){

          console.log('Este producto ya ha sido agregado')

        }else{

            setCartArray([...carArray, {producto, cantidad}])
        }}

    
    const removeItem = (id) => {
        const items = carArray.filter( (i) => i.producto.id ==! id )
        setCartArray(items)
    }

    const clearCart = () => {
        setCartArray([])
    }


    const value = {
        carArray,
        addToCart,
        clearCart,
        removeItem
    }

    return(
        <CartContext.Provider value={value}>  
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider


