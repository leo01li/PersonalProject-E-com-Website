import react, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import CartProduct from "../CartProduct";
import { totalItem, totalPrice } from "../Features/CartReducer";
import './Cart.css';

const Cart = () => {
    const {cart} = useContext(CartContext)
    return (
        <div className="cart-container">
            <div className="row">
                <div className="cart-display">
                    {cart.length === 0 ? 
                    <div className="empty-cart"> Your cart is empty </div>: cart.map(p => (<CartProduct product={p}></CartProduct>))}
                </div>
                <div className="totals-container">
                    <div className="total-amounts">
                        <h3>Total Items: {totalItem(cart)}</h3>
                        <h3>Total Price: ${totalPrice(cart)}</h3>
                        <button className="checkout">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Cart
