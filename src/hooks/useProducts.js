import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return { products };
}
