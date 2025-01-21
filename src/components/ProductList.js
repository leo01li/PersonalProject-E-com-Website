import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import './ProductList.css';

export default function ProductList({ products }) {
    const [selectedCategory, setSelectedCategory] = useState("all");
    
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const filteredProducts = selectedCategory === "all" 
    ? products : products.filter((products) => products.category === selectedCategory);
    
    return(
    <div className="product-screen">
    <div className="categories">
    <h2>Categories</h2>
    <form>
          {["all", "electronics", "jewelery", "men's clothing", "women's clothing"].map((category) => (
            <div className="select" key={category}>
              <input
                type="radio"
                id={category}
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={handleCategoryChange}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </form>
            </div>
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
}