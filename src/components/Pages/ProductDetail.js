import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext, FavoritesContext } from "../Features/ContextProvider";


export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();

  const [product, setProduct] = useState(location.state?.product ?? null);
  const [loading, setLoading] = useState(!location.state?.product);
  const [err, setErr] = useState("");

  const { cart, cartDispatch } = useContext(CartContext);
  const { favorites, favoritesDispatch } = useContext(FavoritesContext);

  const inCart = cart.some(item => item.id === product?.id);
  const inFavorites = favorites.some(item => item.id === product?.id);

  const handleClick = (actionType) => {
    if (actionType === "cart" && !inCart) {
      cartDispatch({ type: "Add", product });
    }

    if (actionType === "favorite" && !inFavorites) {
      favoritesDispatch({ type: "Add", product });
    }
  };


  useEffect(() => {
    if (product) return;
  
    let ignore = false;
  
    async function load() {
      setLoading(true);
      setErr("");
  
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        if (!ignore) setProduct(data);
      } catch (e) {
        if (!ignore) setErr(e.message || "Something went wrong");
      } finally {
        if (!ignore) setLoading(false);
      }
    }
  
    load();
    return () => { ignore = true; };
  }, [id, product]);
  

  if (loading) return <div className="pd-wrap">Loading…</div>;
  if (err) return <div className="pd-wrap">Error: {err}</div>;
  if (!product) return <div className="pd-wrap">No product found.</div>;

  return (
    <div className="pd-wrap">
      <div className="pd-card">
        <div className="pd-img">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="pd-info">
          <p className="pd-category">{product.category}</p>
          <h1 className="pd-title">{product.title}</h1>

          <div className="pd-rating">
            <span>⭐ {product?.rating?.rate ?? "N/A"}</span>
            <span>({product?.rating?.count ?? 0} reviews)</span>
          </div>

          <p className="pd-price">${product.price}</p>
          <p className="pd-desc">{product.description}</p>

          <div className="buttons">
            <button className="add-to-cart" 
            onClick={() => handleClick("cart")}
            disabled={inCart}>{inCart ? "Added to Cart" : "Add to Cart"}</button>
            <button className="add-to-favorite" 
            onClick={() => handleClick("favorite")}
            disabled={inFavorites}>{inFavorites ? "Favorited" : "Favorite"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
