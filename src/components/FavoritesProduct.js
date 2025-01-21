import React, { useContext } from 'react'
import { FavoritesContext } from './Features/ContextProvider';
import './FavoritesProduct.css';
 
 const FavoritesProduct = ({product}) => {
    const{favorites, favoritesDispatch} = useContext(FavoritesContext)
   
    return (
     <div className="favorite-items">
        <img className="img" src={product.image} alt="img" />
        <div className="detail">
            <h2>{product.title}</h2>
            <h3>${product.price}</h3>
            <button className="remove-button" onClick={() => favoritesDispatch({type: "Remove", id: product.id})}>Remove</button>
        </div>
     </div>
   )
 }
 
 export default FavoritesProduct