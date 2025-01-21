import React, { useContext } from 'react'
import { FavoritesContext } from '../Features/ContextProvider';
import FavoritesProduct from '../FavoritesProduct';
import { totalItem } from '../Features/FavoritesReducer';


const Favorites = () => {
    const {favorites} = useContext(FavoritesContext)
    return (
        <div className="favorites-container">
            <h2>Total Favorited Items: {totalItem(favorites)}</h2>
                <div className="favorites-display">
                    {favorites.length === 0 ? 
                    <div className="empty-favorites"> 
                    Your List is Currently Empty 
                    </div>: favorites.map(p => (<FavoritesProduct product={p}></FavoritesProduct>))}
            </div>
        </div>
        )
}

export default Favorites

