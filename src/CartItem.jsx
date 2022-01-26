import React, { useContext } from "react";
import { CartContext } from './Context'

const CartItem = ({producto, id, cantidad}) => {

    const {name, imagen} = producto
    const {removeItem} = useContext(CartContext)

    return(
        <div className="container">
            <h4>{name}</h4>

            <img style={{width:'60px', height:'60px'}} src={imagen}/>
            <p>Cantidad: {cantidad}</p>

         

            <button onClick={() =>removeItem(id) }> Borrar</button>
        </div>
    )

}

export default CartItem