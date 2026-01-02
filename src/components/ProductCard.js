import React, {useContext} from "react";
import './ProductCard.css'
import { CartContext, FavoritesContext } from "./Features/ContextProvider";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { cart, cartDispatch } = useContext(CartContext)
  const { favorites, favoritesDispatch } = useContext(FavoritesContext)

  const inCart = cart.some(item => item.id === product.id);
  const inFavorites = favorites.some(item => item.id === product.id)

  const handleClick = (actionType) => {
    if (actionType === "cart") {
      if (!inCart) {
        cartDispatch({ type: "Add", product });
      }
    } else if (actionType === "favorite") {
      if (!inFavorites) {
        favoritesDispatch({ type: "Add", product });
      }
    }
  };

    return (
    <div className="product-card">
  <Link className="product-link" to={`/product/${product.id}`} state={{ product }}>
  <div className="product-image-container">
    <img className="product-image" src={product.image} alt={product.title} />
  </div>
  <div className="product-info">
    <h2 className="product-title">{product.title}</h2>
    {/* <p className="product-desc">{product.description}</p> */}
    <p>Price: ${product.price}</p>
  </div>
  </Link>
  <div className="buttons">
    <button className="add-to-cart" 
    onClick={() => handleClick("cart")}
    disabled={inCart}>{inCart ? "Added to Cart" : "Add to Cart"}</button>
    <button className="add-to-favorite" 
    onClick={() => handleClick("favorite")}
    disabled={inFavorites}>{inFavorites ? "Favorited" : "Favorite"}</button>
    </div>
</div>
  );
}