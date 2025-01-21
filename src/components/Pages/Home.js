import react, { useEffect, useState } from 'react';
import '../../App.css';
import ProductList from '../ProductList';
import './Home.css';

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => setProducts(data))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);
    
    return (
            <div>
                <h1 className="product-label">Products</h1>
                <ProductList products={products} />
            </div>
    );
}