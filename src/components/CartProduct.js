import React, { useContext } from 'react'
import { CartContext } from './Features/ContextProvider';
import './CartProduct.css';
 
 const CartProduct = ({product}) => {
    const{cart, cartDispatch} = useContext(CartContext)

    const Increase = (id) => {
        const Index = cart.findIndex( p => p.id === id)
        if(cart[Index].quantity < 99) {
            cartDispatch({type: "Increase", id})
        }
    };

    const Decrease = (id) => {
        const Index = cart.findIndex( p => p.id === id)
        if(cart[Index].quantity > 1) {
            cartDispatch({type: "Decrease", id})
        }
    };
   
    return (
     <div className="cart-items">
        <img className="img" src={product.image} alt="img" />
        <div className="detail">
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <div className="buttons">
                <button className="decrease-button" onClick={() => Decrease(product.id)}><b>-</b></button>
                <button className="amount">{product.quantity}</button>
                <button className="increase-button" onClick={() => Increase(product.id)}><b>+</b></button>
            </div>
            <button className="remove-button" onClick={() => cartDispatch({type: "Remove", id: product.id})}>Remove</button>
        </div>
     </div>
   )
 }
 
 export default CartProduct