import React from "react"
import ItemCount from "./ItemCount"
import { useContext } from "react";
import {CartContext} from './Context'
 
function ItemDetail({personaje}){
    const {name, species, image, gender, id } = personaje
    const { addToCart } = useContext(CartContext)


    // const {agregarProducto} = useContext(context)
    
    const onAdd = (cantidad) =>{
        // console.log(`agregaste ${name}, cantidad ${cantidad}`)
        addToCart(personaje, cantidad)
    }

    return(
        <div className="card" style={{width:'10%'}}>
            <img src={image} alt="" style={{width: '80px', height:'80px'}} />
            <div className="card-body">
                <h5 className="card-tittle">{name}</h5>
                <p>{species}</p>
                <p>{gender}</p>
                <ItemCount initial={1} stock={100} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail