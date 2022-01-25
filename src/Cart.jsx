import React, { useContext } from "react";
import {CartContext, clearCart} from './Context'
import CartItem from "./CartItem";

const Cart = () => {

    const{carArray, clearCart} = useContext(CartContext);
    const carritoVacio = carArray.lenght < 1;

    return(
        <div className="container">
            { carritoVacio ? <h2>No hay productos agregados</h2> : carArray.map((item)=> (<CartItem key={item.id} personaje={item.producto} contador={item.contador}/>))}
            <button onClick={clearCart}>Vaciar carro</button>
            {console.log(carArray)}
        </div>
    )
}

export default Cart